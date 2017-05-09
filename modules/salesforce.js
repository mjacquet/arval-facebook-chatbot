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

let theLead = nforce.createSObject('Lead');
theLead.set('Company', `Facebook Customer`);
theLead.set('Status', 'New');
theLead.set('FirstName', `Test`);
theLead.set('LastName', `TestLast`);
theLead.set('Lead_Score_Value__c', 52);


let theCase = nforce.createSObject('Case');
theCase.set('Subject', `Facebook Customer`);
theCase.set('Description', 'Case from Facebook Bot');
theCase.set('Origin', `Facebook Bot`);
theCase.set('Status', `New`);


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

                    var theLead2 = resp.records[0];
                    if(params.fname){
                        console.log('inside fname');
                        theLead2.set('FirstName', params.fname);
                    }
                    if(params.lname){
                        console.log('inside lname');
                        theLead2.set('LastName', params.lname);
                    }
                    if(params.q1){
                        console.log('inside q1');
                        theLead2.set('Situation__c', params.q1);
                    }
                    if(params.q2){
                        console.log('inside q2');
                        theLead2.set('Type_V_hicule__c', params.q2);
                    }
                    if(params.zip){
                        console.log('inside zip');
                        theLead2.set('Zip__c', params.zip);
                    }
                    if(params.q3){
                        console.log('inside q3');
                        if(params.q3 == 'true'){
                            theLead2.set('D_sire_un_financement__c', true);
                        } else{
                            theLead2.set('D_sire_un_financement__c', false);
                        }
                    }
                    console.log("theLead: ", theLead2);
                    org.update({ sobject: theLead2 }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theLead2);
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

                    var theCase2 = resp.records[0];

                    if(params.fname && params.lname){
                        console.log('inside fname');
                        theCase2.set('Subject', `Facebook Customer: ${params.fname} ${params.lname}`);
                    }
                    if(params.q4){
                        console.log('inside q4');
                        theCase2.set('Type_Assistance__c', params.q4);
                    }
                    if(params.q5){
                        console.log('inside q5');
                        if(params.q5 == 'true'){
                            theCase2.set('Personne_bless_e__c', true);
                        } else{
                            theCase2.set('Personne_bless_e__c', false);
                        }
                        
                    }
                    console.log("theCase: ", theCase2);
                    
                    org.update({ sobject: theCase2 }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theCase2);
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

login();

exports.org = org;
exports.createLead = createLead;
exports.updateLead = updateLead;
exports.createCase = createCase;
exports.updateCase = updateCase;