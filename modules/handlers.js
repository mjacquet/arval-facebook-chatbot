"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "Find houses in Boston", "3 bedrooms in Boston", "3 bedrooms in Boston between 500000 and 750000", "show me price changes"`}, sender);
};