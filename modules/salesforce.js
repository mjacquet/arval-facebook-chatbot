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





let createCase = (propertyId, customerName, customerId) => {

    return new Promise((resolve, reject) => {
        let c = nforce.createSObject('Case');
        c.set('subject', `Contact ${customerName} (Facebook Customer)`);
        c.set('description', "Facebook id: " + customerId);
        c.set('origin', 'Facebook Bot');
        c.set('status', 'New');
        c.set('Property__c', propertyId);

        org.insert({sobject: c}, err => {
            if (err) {
                console.error(err);
                reject("An error occurred while creating a case");
            } else {
                resolve(c);
            }
        });
    });

};

let createLead = (customerFName, customerLName, customerId) => {

    return new Promise((resolve, reject) => {
        let l = nforce.createSObject('Lead');
        l.set('Company', `Facebook Customer`);
        l.set('FirstName', `${customerFName}`);
        l.set('LastName', `${customerLName}`);
        l.set('Description', "Facebook id: " + customerId);
        l.set('Status', 'New');
        l.set('External_ID__c', '1001');

        org.insert({sobject: l}, err => {
            if (err) {
                console.error(err);
                reject("An error occurred while creating a Lead");
            } else {
                resolve(l);
            }
        });
    });

};

let updateLead = (theLead) => {

    return new Promise((resolve, reject) => {
        let q = theLead;

        q.set('Description', "TEST: Success");

        console.log(q);

        org.upsert({sobject: q}, (err, resp) => {
            if (err) {
                console.error(err);
                reject("An error occurred while updating a Lead");
            } else {
                resolve(q);
            }
        });
        
    });
};

login();

exports.org = org;
exports.createCase = createCase;
exports.createLead = createLead;
exports.updateLead = updateLead;