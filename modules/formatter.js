"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.onBoard1 = response => {
    return {
        "text":"Bonjour " + response.first_name + " et bienvenue chez Cumulus Assurance. Que puis-je faire pour vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Decouvrir les offres",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"Je suis client",
            "payload":"theStartTwo"
          }
        ]
    }
};

exports.onBoard2 = response => {
    console.log('onBoard2');
    return {
        "text":"Etes vous locataire ou proprietaire?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Locataire",
            "payload":"p1"
          },
          {
            "content_type":"text",
            "title":"Colocataire",
            "payload":"p2"
          },
          {
            "content_type":"text",
            "title":"Proprietaire",
            "payload":"p3"
          }
        ]
    }
};

exports.onBoard3 = response => {
    return {
        "text":"Votre logement est-il équipé des dispositifs suivants:",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Alarme incendie",
            "payload":"button6"
          },
          {
            "content_type":"text",
            "title":"Objets connectés",
            "payload":"button7"
          },
          {
            "content_type":"text",
            "title":"Alarme effraction",
            "payload":"button8"
          }
        ]
    }
};

exports.onBoard4 = response => {
    return {
        "text":"Et pour finir : quel est l'assureur actuel de votre logement?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Pas d'assureur",
            "payload":"button9"
          },
          {
            "content_type":"text",
            "title":"AXA",
            "payload":"button10"
          },
          {
            "content_type":"text",
            "title":"MAIF",
            "payload":"button11"
          },
          {
            "content_type":"text",
            "title":"CNP Assurances",
            "payload":"button12"
          },
          {
            "content_type":"text",
            "title":"Autre",
            "payload":"button13"
          }

        ]
    }
};

exports.onBoard5 = response => {

    let elements = [];
        elements.push(  
            {
                title: 'Cumulus Confort',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JWHdVeWM2dVc5Q2o0dzZVMUJVVGE5NGg3MF84',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
                    }
                ]
            },
            {
                title: 'Cumulus Confort Plus',
                subtitle: `20,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JLWRiUjBPejFHREh3dnFZMjNRbzh2U2hyOE9V',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
                    }
                ]
            },
            {
                title: 'Offre maison connectée',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JOEpjd0wxRTllZUpaNnJWWnpfNTQ2S2gxbHc0',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
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