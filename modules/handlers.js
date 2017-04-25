"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');


exports.sample = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Please send location`}, sender);
    });
};

exports.number1 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question1(response), sender);
    });
};

exports.test = (sender) => {
    messenger.getSuggestion('75001','2').then(response => {
        messenger.send({text: `${response.service_plan}`}, sender);
    });
};

exports.hi = (sender) => {
    console.log('hi');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.start = (sender) => {
    console.log('start');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard1(response), sender);
    });
};

