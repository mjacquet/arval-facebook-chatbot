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

    return new Promise((resolve,reject) => {
        var l = nforce.createSObject('Lead');
        l.set('Company', `Facebook Customer`);
        l.set('FirstName', `${customerFName}`);
        l.set('LastName', `${customerLName}`);
        l.set('Description', "Facebook id: " + customerId);
        l.set('Status', 'New');

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

};

let createCase = () => {

    return new Promise((resolve, reject) => {
        let c = nforce.createSObject('Case');
        c.set('subject', `ddd`);
        c.set('description', "Facebook id: ");
        c.set('origin', 'Facebook Bot');
        c.set('status', 'New');

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


login();

exports.org = org;
exports.createLead = createLead;
exports.createCase = createCase;