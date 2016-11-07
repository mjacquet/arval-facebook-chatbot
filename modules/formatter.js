"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.onBoard1 = response => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Bonjour ${response.first_name} et bienvenue chez Cumulus Assurance. Que puis-je faire pour vous?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Découvrir les offres",
                        "payload": "button1"
                    },
                    {
                        "type": "postback",
                        "title": "Je suis client",
                        "payload": "button2"
                    }]
            }
        }
    };
};

exports.onBoard2 = response => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `C'est noté. Êtes vous locataire ou propriétaire?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Locataire",
                        "payload": "button3"
                    },
                    {
                        "type": "postback",
                        "title": "Colocataire",
                        "payload": "button4"
                    },
                    {
                        "type": "postback",
                        "title": "Propriétaire",
                        "payload": "button5"
                    }]
            }
        }
    };
};
exports.test = response => {
    return {
        "text":"Pick a color:",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Red",
            "payload":"button6"
          },
          {
            "content_type":"text",
            "title":"Green",
            "payload":"button7"
          }
        ]
      }
};
exports.onBoard3 = response => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Votre logement est-il équipé des dispositifs suivants:`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Alarme incendie",
                        "payload": "button6"
                    },
                    {
                        "type": "postback",
                        "title": "Objets connectés",
                        "payload": "button7"
                    },
                    {
                        "type": "postback",
                        "title": "Alarme anti-effraction",
                        "payload": "button8"
                    }]
            }
        }
    };
};

exports.onBoard4 = response => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Et pour finir : quel est l'assureur actuel de votre logement?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Je n'ai pas d'assureur",
                        "payload": "button7"
                    },
                    {
                        "type": "postback",
                        "title": "AXA",
                        "payload": "button8"
                    },
                    {
                        "type": "postback",
                        "title": "MAIF",
                        "payload": "button9"
                    }]
            }
        }
    };
};
exports.onBoard5 = response => {

    let elements = [];
        elements.push(  
            {
                title: 'Cumulus Confort',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-Jdk4wZGQ2S2tBQm8',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button12"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button13"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button14"
                    }
                ]
            },
            {
                title: 'Cumulus Confort Plus',
                subtitle: `20,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-Jdk4wZGQ2S2tBQm8',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button12"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button13"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button14"
                    }
                ]
            },
            {
                title: 'Offre maison connectée',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-Jdk4wZGQ2S2tBQm8',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button12"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button13"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button14"
                    }
                ]
            }


        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };

};






exports.formatProperties = properties => {
    let elements = [];
    properties.forEach(property => {
            elements.push({
                title: property.get("Title__c"),
                subtitle: `${property.get("Address__c")}, ${property.get("City__c")} ${property.get("State__c")} · ${numeral(property.get("Price__c")).format('$0,0')}`,
                "image_url": property.get("Picture__c"),
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Schedule visit",
                        "payload": "schedule_visit," + property.getId()
                    },
                    {
                        "type": "postback",
                        "title": "View broker info",
                        "payload": "contact_broker," + property.getId()
                    },
                    {
                        "type": "postback",
                        "title": "Contact me",
                        "payload": "contact_me," + property.getId()
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.formatPriceChanges = priceChanges => {
    let elements = [];
    priceChanges.forEach(priceChange => {
            let property = priceChange.get("Parent");
            elements.push({
                title: `${property.Address__c}, ${property.City__c} ${property.State__c}`,
                subtitle: `Old price: ${numeral(priceChange.get("OldValue")).format('$0,0')} · New price: ${numeral(priceChange.get("NewValue")).format('$0,0')} on ${moment(priceChange.get("CreatedDate")).format("MMM Do")}`,
                "image_url": property.Picture__c,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Schedule visit",
                        "payload": "schedule_visit," + property.Id
                    },
                    {
                        "type": "postback",
                        "title": "View broker info",
                        "payload": "contact_broker," + property.Id
                    },
                    {
                        "type": "postback",
                        "title": "Contact me",
                        "payload": "contact_me," + property.Id
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};


exports.formatAppointment = property => {
    var options = [
        moment().add(1, 'days').format('ddd MMM Do') + ' at 10am',
        moment().add(2, 'days').format('ddd MMM Do') + ' at 9am',
        moment().add(2, 'days').format('ddd MMM Do') + ' at 5pm',
        moment().add(3, 'days').format('ddd MMM Do') + ' at 1pm',
        moment().add(3, 'days').format('ddd MMM Do') + ' at 6pm',
    ];
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Select one of the available appointments below at ${property.get("Address__c")} in ${property.get("City__c")}.`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + property.get("Address__c") + " in " + property.get("City__c") + "," + options[2]
                    }]
            }
        }
    };
};

exports.formatBroker = broker => {
    let elements = [];
    elements.push({
        title: "Caroline Kingsley",
        subtitle: "Senior Broker  · 617-219-6363 · ckingsley@dreamhouse.com",
        "image_url": "https://s3-us-west-1.amazonaws.com/sfdc-demo/messenger/caroline_500x260.png",
        "buttons": [
            {
                "type": "postback",
                "title": "Contact Me",
                "payload": "contact_me"
            }]
    });
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};