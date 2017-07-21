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


/*let theCase = nforce.createSObject('Case');
theCase.set('Subject', `Réclamation-Campanille-Duplicata`);
theCase.set('RecordTypeId', `0126A000000r9Lv`);
theCase.set('ContactId', `0036A000009H4qR`);
theCase.set('Origin', `Facebook`);*/

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

let updateMaxBot = (field,text) => {
    return new Promise((resolve, reject) => {
   let maxBot = nforce.createSObject('maxBot__c');
   maxBot.set('Id','a4y0Y000000Gs7c');
   maxBot.set(field,text);
   org.update({ sobject: maxBot }, function(err, resp){
       if(!err){
           console.log('It worked!');
           resolve(maxBot);
       }
       else{
         console.log(maxBot);
           reject("Error updating the maxBot");
       }
   });
});
};


let uploadAttachment = (url) => {
    return new Promise((resolve, reject) => {
    /*  let maxBot = nforce.createSObject('FeedAttachment');
      maxBot.set('ParentId','a4y0Y000000Gs7c');
        maxBot.set('Name','idcard.jpg');
      var request = require('request').defaults({ encoding: null });
      request.get(url, function (err, res, body) {
            //body="zererere";
            maxBot.set('body',body.toString('base64'));
            //.toString('base64')
            console.log("attachment",maxBot);
            org.insert({ sobject: maxBot }, function(err, resp){
                if(!err){
                    console.log('It worked!');
                    resolve(maxBot);
                }
                else{
                  console.log(err);
                    reject("Error updating the maxBot");
                }
            });
      });*/


      let maxBot = nforce.createSObject('maxBot__c');
      maxBot.set('Id','a4y0Y000000Gs7c');
      var request = require('request').defaults({ encoding: null });
      request.get(url, function (err, res, body) {
          //  body="zererere";
            maxBot.setAttachment('idcard.jpg',body.toString('base64'));
            //.toString('base64')
            console.log("attachment",maxBot);
            org.update({ sobject: maxBot }, function(err, resp){
                if(!err){
                    console.log('It worked!');
                    console.log(resp);
                    resolve(maxBot);
                }
                else{
                  console.log(maxBot);
                    reject("Error updating the maxBot");
                }
            });
      });

});
};


/*
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

        org.insert({ sobject: theCase }, function(err, resp){
            if(!err){
                console.log('It worked!: ', theCase);
                resolve(theCase);
            }
            else{
                reject(err);
            }
        });
    });
};

let updateCase = (params, sender) => {
    return new Promise((resolve, reject) => {
        if(params){
            console.log("params: ", params);
            if(params.q2){
                console.log('inside q2');
                console.log('q2', params.q2);
                theCase.set('Stay__c', `Post-Stay`);
            }
            if(params.q3){
                console.log('inside q3');
                console.log('q3', params.q3);
                theCase.set('Marques__c', `${params.q3}`);
            }
            if(params.q4){
                console.log('inside q4');
                console.log('q4', params.q4);
                theCase.set('Famille__c', `${params.q4}`);
            }
            if(params.q5){
                console.log('inside q5');
                console.log('q5', params.q5);
                theCase.set('Sous_Famille__c', `Demande de Duplicata`);
                theCase.set('Motif__c', `Duplicata`);
            }
            if(params.q6){
                console.log('inside q6');
                console.log('q6', params.q6);
                theCase.set('Type_Contact__c', `${params.q6}`);
            }

            console.log("theCase: ", theCase);

            resolve(theCase);

        }
    });
};
*/
let getServiceContract = (response) => {
    console.log('getServiceContract');
    return new Promise((resolve, reject) => {

        var q = `SELECT Id, FirstName, LastName FROM Contact WHERE FirstName = '${response.first_name}' AND LastName = '${response.last_name}' ORDER BY CreatedDate DESC LIMIT 1`;

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                var theContact = resp.records[0];

                console.log("theContact: ", theContact);
                var theId = theContact.get('id');
                console.log("theId: ", theId);

                var z = `SELECT Id, Name, ContactId FROM ServiceContract WHERE ContactId = '${theId}' ORDER BY CreatedDate`;
                org.query({ query: z }, function(err2, resp2){

                    if(!err2 && resp2.records) {

                        var theServiceContract = resp2.records[0];

                        console.log("theServiceContract: ", theServiceContract);

                        resolve(theServiceContract);
                    }
                    else{
                        reject(err2);
                    }
                });
            }
            else{
                reject(err);
            }
        });
    });
};
/*
let getRecommendation = (response, theUserDetails) =>{
    console.log('getRecommendation');
    console.log('theUserDetails: ', theUserDetails);
    return new Promise((resolve, reject) => {

        var q = `SELECT Id, Name, Description, ProductCode, Image_URL__c FROM Product2 WHERE ProductCode in ('${response.product1}','${response.product2}','${response.product3}')`;

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                var theRecords = resp.records;

                console.log("theRecords[0]: ", theRecords[0].get("Id"));

                let theProductReccomendation = nforce.createSObject('Product_Recommendation__c');
                theProductReccomendation.set('Account__c', theUserDetails.get("Id"));
                theProductReccomendation.set('Product1__c', theRecords[0].get("Id"));
                theProductReccomendation.set('Product2__c', theRecords[1].get("Id"));
                theProductReccomendation.set('Product3__c', theRecords[2].get("Id"));

                org.insert({ sobject: theProductReccomendation }, function(err, resp){
                    if(!err){
                        console.log('It worked!: ', resp);
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

*/
login();


exports.uploadAttachment = uploadAttachment;
exports.getServiceContract = getServiceContract;
exports.updateMaxBot = updateMaxBot;
