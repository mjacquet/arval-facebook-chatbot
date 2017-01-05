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

exports.test = (sender) => {
    messenger.getSuggestion(sender).then(response => {
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

exports.theStart = (sender) => {
    console.log('theStart');
    messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        salesforce.createLead(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard2(response), sender);
        });
    });
};
exports.theStartTwo = (sender) => {
    console.log('theStartTwo ');
    //messenger.send({text: `Je vais me charger de trouver l'assurance parfaite pour vous. Cela prendra seulement quelques minutes.`}, sender);
    messenger.getUserInfo(sender).then(response => {
        console.log('Inside getUserInfo');
        messenger.send(formatter.onBoard6(response), sender);
    });
};

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
        messenger.send(formatter.onBoard3(response), sender);
        salesforce.updateLead({q2: `Colocataire`}, sender).then(() => {});
    });
};

exports.button5 = (sender) => {
    console.log('button5 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
        salesforce.updateLead({q2: `Propriétaire`}, sender).then(() => {});
    });
};

exports.button6 = (sender) => {
    console.log('button6 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
        salesforce.updateLead({q3: `Alarme incendie`}, sender).then(() => {});
    });
};

exports.button7 = (sender) => {
    console.log('button7 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
        salesforce.updateLead({q3: `Objets connectés`}, sender).then(() => {});
    });
};

exports.button8 = (sender) => {
    console.log('button8 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
        salesforce.updateLead({q3: `Alarme effraction`}, sender).then(() => {});
    });
};

exports.button9 = (sender) => {
    console.log('button9 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
        messenger.send(formatter.onBoard5(response), sender);
        salesforce.updateLead({q4: `Pas d'assureur`}, sender).then(() => {});
    });
};

exports.button10 = (sender) => {
    console.log('button10 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
        messenger.send(formatter.onBoard5(response), sender);
        salesforce.updateLead({q4: `AXA`}, sender).then(() => {});
    });
};

exports.button11 = (sender) => {
    console.log('button11 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
        messenger.send(formatter.onBoard5(response), sender);
        salesforce.updateLead({q4: `MAIF`}, sender).then(() => {});
    });
};  

exports.button12 = (sender) => {
    console.log('button12 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
        messenger.send(formatter.onBoard5(response), sender);
        salesforce.updateLead({q4: `CNP Assurances`}, sender).then(() => {});
    });
};  

exports.button13 = (sender) => {
    console.log('button13 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
        messenger.send(formatter.onBoard5(response), sender);
        salesforce.updateLead({q4: `Autre`}, sender).then(() => {});
    });
};

exports.button14 = (sender) => {
    console.log('button14 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard7(response), sender);
        salesforce.createCase(response.first_name, response.last_name, sender).then(() => {});
    });
};

exports.button15 = (sender) => {
    console.log('button15 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard7(response), sender);
        salesforce.createCase(response.first_name, response.last_name, sender).then(() => {});
    });
};

exports.button16 = (sender) => {
    console.log('button16 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard8(response), sender);
        salesforce.updateCase({r2: `Dégât des eaux`}, sender).then(() => {});
    });
};

exports.button17 = (sender) => {
    console.log('button17 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard8(response), sender);
        salesforce.updateCase({r2: `Vol`}, sender).then(() => {});
    });
};

exports.button18 = (sender) => {
    console.log('button18 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard8(response), sender);
        salesforce.updateCase({r2: `Incendie`}, sender).then(() => {});
    });
};

exports.button19 = (sender) => {
    console.log('button19 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard9(response), sender);
        salesforce.updateCase({r3: `Oui`}, sender).then(() => {});
    });
};

exports.button20 = (sender) => {
    console.log('button20 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard9(response), sender);
        salesforce.updateCase({r3: `Non`}, sender).then(() => {});
    });
};

exports.button21 = (sender) => {
    console.log('button21 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Merci. Votre déclaration a été transmis à Sarah, agent Cumulus. Elle reviendra vers vous dès que possible.`}, sender);
        messenger.send(formatter.onBoard10(response), sender);
        salesforce.updateCase({r4: `moins de 1 000€`}, sender).then(() => {});
    });
};

exports.button22 = (sender) => {
    console.log('button22 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Merci. Votre déclaration a été transmis à Sarah, agent Cumulus. Elle reviendra vers vous dès que possible.`}, sender);
        messenger.send(formatter.onBoard10(response), sender);
        salesforce.updateCase({r4: `entre 1 000 et 10 000 €`}, sender).then(() => {});
    });
};

exports.button23 = (sender) => {
    console.log('button23 called');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Merci. Votre déclaration a été transmis à Sarah, agent Cumulus. Elle reviendra vers vous dès que possible.`}, sender);
        messenger.send(formatter.onBoard10(response), sender);
        salesforce.updateCase({r4: `Plus de 10 000 €`}, sender).then(() => {});
    });
};
