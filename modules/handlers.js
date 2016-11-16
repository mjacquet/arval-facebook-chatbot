"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.start = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.createLead(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard1(response), sender);
        });
    });
};

exports.test = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.createCase(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard1(response), sender);
        });
    });
};
