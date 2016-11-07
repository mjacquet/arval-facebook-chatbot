"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.schedule_visit = (sender, values) => {
    salesforce.findProperties({id: values[1]}).then(properties => {
        messenger.send(formatter.formatAppointment(properties[0]), sender);
    });
};

exports.contact_broker = (sender, values) => {
    messenger.send({text: "Here is the broker information for this property"}, sender);
    messenger.send(formatter.formatBroker(), sender);
};

exports.confirm_visit = (sender, values) => {
    messenger.send({text: `OK, your appointment is confirmed for ${values[2]}. ${values[1]}.`}, sender);
};

exports.contact_me = (sender, values) => {

    let propertyId = values[1];
    messenger.getUserInfo(sender).then(response => {
        salesforce.createCase(propertyId, response.first_name + " " + response.first_name, sender).then(() => {
            messenger.send({text: `Thanks for your interest, ${response.first_name}. I asked a broker to contact you asap.`}, sender);
        });
    });

};

exports.button1 = (sender, values) => {

    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.send({text: `Pour commencer, quelle est l'adresse de votre logement?`}, sender);

};

exports.button2 = (sender, values) => {

    messenger.send({text: `Do Nothing`}, sender);

};
exports.button3 = (sender, values) => {

    messenger.send({text: `button3`}, sender);

};
exports.button4 = (sender, values) => {

    messenger.send({text: `button4`}, sender);

};
exports.button5 = (sender, values) => {

    messenger.send({text: `button5`}, sender);

};
exports.button6 = (sender, values) => {

    messenger.send({text: `button6`}, sender);

};
exports.button7 = (sender, values) => {

    messenger.send({text: `button7`}, sender);

};
exports.button8 = (sender, values) => {

    messenger.send({text: `button8`}, sender);

};
