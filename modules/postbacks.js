"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.schedule_visit = (sender) => {
	console.log('schedule_visit');
	messenger.getUserInfo(sender).then(response => {
    	messenger.send(formatter.formatAppointment(response), sender);
    });
};

exports.confirm_visit = (sender, values) => {
	console.log('values: ', values);
    messenger.send({text: `Votre rendez-vous est confirmé pour le ${values[1]}. Concession Paris Grenelle 146 bd de Grenelle 75015 Paris. Téléphone : 01 56105610 Votre conseiller Paul Durand vous accueillera.`}, sender);
};

exports.blank = (sender, values) => {
    console.log('inside blank');
};

exports.contactagent = (sender, values) => {
    console.log('contactagent');
};
