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

exports.theStart = (sender) => {
    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);

    });
};
exports.theStartTwo = (sender) => {
    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};
/*
exports.button3 = (sender) => {
    console.log('button3 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Locataire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button4 = (sender) => {
    console.log('button4 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Colocataire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button5 = (sender) => {
    console.log('button5 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q2: `Propriétaire`}, sender).then(() => {
            messenger.send(formatter.onBoard3(response), sender);
        });
    });
};

exports.button6 = (sender) => {
    console.log('button6 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q3: `Alarme incendie`}, sender).then(() => {
            messenger.send(formatter.onBoard4(response), sender);
        });
    });
};

exports.button7 = (sender) => {
    console.log('button7 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q3: `Objets connectés`}, sender).then(() => {
            messenger.send(formatter.onBoard4(response), sender);
        });
    });
};

exports.button8 = (sender) => {
    console.log('button8 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q3: `Alarme effraction`}, sender).then(() => {
            messenger.send(formatter.onBoard4(response), sender);
        });
    });
};

exports.button9 = (sender) => {
    console.log('button9 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q4: `Pas d'assureur`}, sender).then(() => {
            messenger.send(formatter.onBoard5(response), sender);
        });
    });
};

exports.button10 = (sender) => {
    console.log('button10 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q4: `AXA`}, sender).then(() => {
            messenger.send(formatter.onBoard5(response), sender);
        });
    });
};

exports.button11 = (sender) => {
    console.log('button11 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q4: `MAIF`}, sender).then(() => {
            messenger.send(formatter.onBoard5(response), sender);
        });
    });
};  

exports.button12 = (sender) => {
    console.log('button12 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q4: `CNP Assurances`}, sender).then(() => {
            messenger.send(formatter.onBoard5(response), sender);
        });
    });
};  

exports.button13 = (sender) => {
    console.log('button13 called');
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateLead({q4: `Autre`}, sender).then(() => {
            messenger.send(formatter.onBoard5(response), sender);
        });
    });
};
*/