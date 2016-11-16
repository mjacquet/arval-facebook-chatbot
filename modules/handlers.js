"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

/*
exports.test = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.createCase(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard1(response), sender);
        });
    });
};
*/
exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.start = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.createLead(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard1(response), sender);
        });
    });
};

exports.button1 = (sender) => {
    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);

    });
};
exports.button2 = (sender) => {
    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};

exports.button3 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Locataire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button4 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Colocataire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button5 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Propriétaire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button6 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

exports.button7 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

exports.button8 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

exports.button9 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};

exports.button10 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};

exports.button11 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};  

exports.button12 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};  

exports.button13 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};