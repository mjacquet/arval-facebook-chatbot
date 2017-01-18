"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.schedule_visit = (sender) => {
    messenger.send(formatter.formatAppointment(sender));
};
/*
exports.confirm_visit = (sender, values) => {
	console.log('values: ', values);
    messenger.send({text: `OK, your appointment is confirmed`}, sender);
};

exports.link_postback = (sender, values) => {
	console.log('link_postback');
    messenger.send({text: `Link`}, sender);
};

exports.image_postback = (sender, values) => {
	console.log('image_postback');
    messenger.send({text: `Image`}, sender);
};
*/