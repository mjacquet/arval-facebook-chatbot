"use strict";

let nforce = require('nforce'),

    SF_CLIENT_ID = process.env.SF_CLIENT_ID,
    SF_CLIENT_SECRET = process.env.SF_CLIENT_SECRET,
    SF_USER_NAME = process.env.SF_USER_NAME,
    SF_PASSWORD = process.env.SF_PASSWORD;

let org = nforce.createConnection({
    clientId: SF_CLIENT_ID,
    clientSecret: SF_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/oauth/_callback',
    mode: 'single',
    autoRefresh: true
});

let login = () => {
    org.authenticate({username: SF_USER_NAME, password: SF_PASSWORD}, err => {
        if (err) {
            console.error("Authentication error");
            console.error(err);
        } else {
            console.log("Authentication successful");
        }
    });
};

let createLead = (params) => {
    return new Promise((resolve,reject) => {

        let theLead = nforce.createSObject('Lead');
        theLead.set('Company', `Facebook Customer`);
        theLead.set('Status', 'New');
        theLead.set('FirstName', `Test`);
        theLead.set('LastName', `TestLast`);

        org.insert({ sobject: theLead }, function(err, resp){
            if(!err){
                console.log('It worked!: ', theLead);
                resolve(theLead);
            }
            else{
                reject("An error occurred while creating a lead");
            }
        });
    });
};

let updateLead = (params, sender) => {
    console.log('how is this getting called');
    if(params){
        return new Promise((resolve, reject) => {

            console.log("params: ", params);

            var q = 'SELECT Id, CreatedDate FROM Lead ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theLead = resp.records[0];
                    if(params.fname){
                        console.log('inside fname');
                        theLead.set('FirstName', params.fname);
                    }
                    if(params.lname){
                        console.log('inside lname');
                        theLead.set('LastName', params.lname);
                    }
                    console.log("theLead: ", theLead);
                    org.update({ sobject: theLead }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theLead);
                        }
                        else{
                            reject("Error updating the Lead");
                        }
                    });
                }
            });
        });
    }
};


let createCase = (params) => {
    return new Promise((resolve,reject) => {

        let theCase = nforce.createSObject('Case');
        theCase.set('Subject', `Facebook Customer`);
        theCase.set('Description', 'Case from Facebook Bot');
        theCase.set('Origin', `Facebook Bot`);
        theCase.set('Status', `New`);

        org.insert({ sobject: theCase }, function(err, resp){
            if(!err){
                console.log('It worked!: ', theCase);
                resolve(theCase);
            }
            else{
                reject("An error occurred while creating a lead");
            }
        });
    });
};

let updateCase = (params, sender) => {
    return new Promise((resolve, reject) => {
        if(params){
            console.log("params: ", params);
            var q = 'SELECT Id FROM Case ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theCase = resp.records[0];

                    if(params.fname && params.lname){
                        console.log('inside fname');
                        theCase.set('Subject', `Facebook Customer: ${params.fname} ${params.lname}`);
                    }
                    console.log("theCase: ", theCase);
                    
                    org.update({ sobject: theCase }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theCase);
                        }
                        else{
                            reject("Error updating the Lead");
                        }
                    });
                }
            });
                
        }
    });
};

let getUserDetails = (response) => {
    console.log('getUserDetails');
    return new Promise((resolve, reject) => {

        var q = `SELECT Id, FirstName, LastName, Average_Speed_Overall__c, Gender__c FROM Account WHERE FirstName = '${response.first_name}' AND LastName = '${response.last_name}' ORDER BY CreatedDate DESC LIMIT 1`;

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                var theAccount = resp.records[0];

                console.log("theAccount: ", theAccount);

                resolve(theAccount);
            }
            else{
                reject(err);
            }
        });
    });
};

let getRecommendation = (response, theUserDetails) =>{
    console.log('getRecommendation');
    console.log('theUserDetails: ', theUserDetails);
    return new Promise((resolve, reject) => {

        var q = `SELECT Id, Name, Description, ProductCode, Image_URL__c FROM Product2 WHERE ProductCode in ('${response.product1}','${response.product2}','${response.product3}')`;

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                var theRecords = resp.records;

                console.log("theRecords: ", theRecords);
                console.log("theRecords[0]: ", theRecords[0]);

                let theProductReccomendation = nforce.createSObject('Product_Recommendation__c');
                theProductReccomendation.set('Account__c', theUserDetails.get("Id"));
                theProductReccomendation.set('Product1__c', theRecords[0].Id);
                theProductReccomendation.set('Product2__c', theRecords[1].Id);
                theProductReccomendation.set('Product3__c', theRecords[2].Id);

                org.insert({ sobject: theProductReccomendation }, function(err, resp){
                    if(!err){
                        console.log('It worked!: ', resp.records);
                        resolve(theRecords);
                    }
                    else{
                        reject("An error occurred while creating a lead");
                    }
                });
            }
            else{
                reject(err);
            }
        });
    });   
};


login();

exports.org = org;
exports.createLead = createLead;
exports.updateLead = updateLead;
exports.createCase = createCase;
exports.updateCase = updateCase;
exports.getUserDetails = getUserDetails;
exports.getRecommendation = getRecommendation;