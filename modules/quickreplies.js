"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.theStart = (sender) => {
	console.log('theStart');
    messenger.send({text: `Je vais me charger de trouver les modèles vous correspondant le mieux. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        salesforce.createLead( sender).then(() => {
            salesforce.updateLead({fname: response.first_name, lname: response.last_name}, sender).then(() => {
                messenger.send(formatter.onBoard2(response), sender);
            });
        });
    });
};

exports.blank = (sender) => {
	console.log('blank');
};

exports.services = (sender) => {
	console.log('services ');
	messenger.getUserInfo(sender).then(response => {
        salesforce.createCase( sender).then(() => {
            messenger.send(formatter.onBoard7(response), sender);
        });
        
    });
};

exports.theStartTwo = (sender) => {
	console.log('theStartTwo ');
    messenger.getUserInfo(sender).then(response => {
        console.log('Inside getUserInfo');
        messenger.send(formatter.onBoard6(response), sender);
    });
};

exports.q1 = (sender, values) => {
	console.log('q1');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        //salesforce.updateLead({q1: values[1]}, sender).then(() => {
            messenger.send(formatter.question2(response), sender);
        //});
    });
    
};

exports.q2 = (sender, values) => {
	console.log('q2');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question3(response), sender);
        //salesforce.updateLead({q2: values[1]}, sender).then(() => {});
    });
};

exports.q3 = (sender, values) => {
    console.log('q3');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Allez-y : j'attends la photo.`}, sender);
    });
};

exports.q6 = (sender, values) => {
    console.log('q6');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question7(response), sender);
    });
};

exports.q4 = (sender, values) => {
	console.log('q4');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
    	salesforce.updateCase({q4: values[1], fname: response.first_name, lname: response.last_name}, sender).then(() => {
            messenger.send(formatter.onBoard8(response), sender);
        });
    });
};

exports.q5 = (sender, values) => {
	console.log('q5');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
    	salesforce.updateCase({q5: values[1]}, sender).then(() => {
	    	messenger.send({text: `Merci, votre déclaration a été transmise à Sarah, agent Peugeot. Elle vous contacte dans les plus bref délais.`}, sender);
	        messenger.send(formatter.onBoard10(response), sender);
	    });
    });
};

exports.q7 = (sender, values) => {
    console.log('q7');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.question8(response), sender);
    });
};

exports.q8 = (sender, values) => {
    console.log('q8');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: 'Très bien. Je reste bien sûr à votre service à tout moment. A bientôt!'}, sender);
    });
};