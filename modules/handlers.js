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
        messenger.send({text: `Hello! How can I help you today, ${response.first_name}?`}, sender);
    });
};

exports.number2 = (sender) => {
    console.log('number2');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Sure ${response.first_name}! Let me sort that out for you. I have a few questions for you.`}, sender);
        setTimeout(function(){
            messenger.send(formatter.question2(response), sender);
        },500);
    });
};

