"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.test = (sender) => {
    console.log('test');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `test Success`}, sender);
    });
};

exports.start = (sender) => {
    console.log('start');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hi, i'm your personal ARVAL BOT, how can i help you today?`}, sender);
    });
};

exports.next1 = (sender) => {
    console.log('next1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Sure, here is your contract summary:`}, sender);
        salesforce.getServiceContract(response).then(recResult => {
            messenger.send(formatter.formatServiceContract(recResult), sender);
        });
        messenger.send({text: `Do you a have any questions about your current contract or would you like to proceed to look at additional services?`}, sender);
    });
};

