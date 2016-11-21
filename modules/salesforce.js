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

let createLead = (customerFName, customerLName, customerId) => {
    if(customerFName){
        return new Promise((resolve,reject) => {
            var l = nforce.createSObject('Lead');
            l.set('Company', `Facebook Customer`);
            l.set('FirstName', `${customerFName}`);
            l.set('LastName', `${customerLName}`);
            l.set('Description', "Facebook id: " + customerId);
            l.set('Status', 'New');
            l.set('Lead_Score__c', 50);

            org.insert({ sobject: l }, function(err, resp){
                if(!err){
                    console.log('It worked!');
                    resolve(l);
                }
                else{
                    reject("An error occurred while creating a lead");
                }
            });
        });
    }
};

let updateLead = (params, sender) => {
    console.log('how is this getting called');
    if(params){
        return new Promise((resolve, reject) => {

            console.log("params: ", params);

            var q = 'SELECT Id, CreatedDate, Statut_locatif__c, Equipement__c, Assureur_actuel__c FROM Lead ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theLead = resp.records[0];
                    if(params.q2){
                        theLead.set('Statut_locatif__c', params.q2);
                        theLead.set('Lead_Score__c', 60);
                    }
                    if(params.q3){
                        theLead.set('Equipement__c', params.q3);
                        theLead.set('Lead_Score__c', 75);
                    }
                    if(params.q4){
                        theLead.set('Assureur_actuel__c', params.q4);
                        theLead.set('Lead_Score__c', 90);
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

let createCase = (customerFName, customerLName, customerId) => {

    return new Promise((resolve, reject) => {
        console.log('inside createCase');
        var c = nforce.createSObject('Case');
        console.log("BURSHT 1");
        c.set('subject', `Contact Pierre Martin (Facebook Customer)`);
        console.log("BURSHT 2");
        c.set('description', "Facebook id: " + customerId);
        console.log("BURSHT 3");
        c.set('origin', 'Facebook Bot');
        console.log("BURSHT 4");
        c.set('status', 'New');

        console.log('c: ' , c);

        org.insert({sobject: c}, function(err, resp){
            if (err) {
                console.error(err);
                console.log('error: ',err);
                reject("An error occurred while creating a case");
            } else {
                console.log('resolve case');
                resolve(c);
            }
        });
    });

};

login();

exports.org = org;
exports.createLead = createLead;
exports.updateLead = updateLead;
exports.createCase = createCase;