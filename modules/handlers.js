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
        messenger.send(formatter.question1(response), sender);
    });
};

exports.next1 = (sender) => {
    console.log('next1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question2(response), sender);
    });
};

