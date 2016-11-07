"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');
/*
exports.searchHouse = (sender) => {
    messenger.send({text: `OK, looking for houses for sale around you...`}, sender);
    salesforce.findProperties().then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};
*/

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "Find houses in Boston", "3 bedrooms in Boston", "3 bedrooms in Boston between 500000 and 750000", "show me price changes"`}, sender);
};

exports.onboard1 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard1(response), sender);
        salesforce.createLead(response.first_name, response.first_name, sender).then(() => {
            messenger.send({text: `Lead Created`}, sender);
        });
    });

};

exports.onboard2 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};

exports.onboard3 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
    });
};

exports.onboard4 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

exports.onboard5 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};


