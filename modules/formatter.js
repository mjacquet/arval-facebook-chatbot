"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.onBoard1 = response => {
    return {
        "text":"Bonjour " + response.first_name + " et bienvenue chez Peugeot. Que puis-je faire pour vous? ",
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

exports.question1 = response => {
    console.log('question1');
    return {
        "text":"Voila une bonne nouvelle ;) "+response.first_name+" Vous le savez peut-être déjà : TGV Max est un programme conçu pour les voyageurs de 16 à 27 ans. Vous êtes bien dans cette tranche d'âge?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Qui",
            "payload":"q1"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"q1"
          }
        ]
    }
};

exports.onBoard4 = response => {
    return {
        "text":"Quel type de véhicule recherchez-vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Berlines et Breaks",
            "payload":"q2, Berlines et Breaks"
          },
          {
            "content_type":"text",
            "title":"SUV",
            "payload":"q2, SUV"
          },
          {
            "content_type":"text",
            "title":"Citadines",
            "payload":"q2, Citadines"
          },
          {
            "content_type":"text",
            "title":"Sportives",
            "payload":"q2, Sportives"
          }

        ]
    }
};

exports.onBoard6 = response => {
    return {
        "text":"Que pouvons-nous faire pour vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Demander une assistance",
            "payload":"services"
          },
          {
            "content_type":"text",
            "title":"Découvrir les services",
            "payload":"blank"
          }
        ]
    }
};

exports.onBoard7 = response => {
    return {
        "text":"De quelle assistance avez-vous besoin?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Panne de véhicule",
            "payload":"q4, Panne de véhicule"
          },
          {
            "content_type":"text",
            "title":"Vol",
            "payload":"q4, Vol"
          },
          {
            "content_type":"text",
            "title":"Pneu crevé",
            "payload":"q4, Pneu crevé"
          }
        ]
    }
};

exports.onBoard8 = response => {
    return {
        "text":"Y-a-t-il des blessés?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Oui",
            "payload":"q5,true"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"q5,false"
          }
        ]
    }
};

exports.onBoard10 = response => {
    let elements = [];
        elements.push(  
            {
                title: 'Agent',
                "image_url": 'http://www.marbellafamilyfun.com/images/wanted-customer-support-agent-21854988.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Contactez-moi",
                        "payload": "contactagent"
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

exports.formatAppointment = response => {
    moment.lang('fr');
    
    var options = [
        moment().add(1, 'days').format('ddd D MMM') + ' à 10am',
        moment().add(2, 'days').format('ddd D MMM') + ' à 9am',
        moment().add(2, 'days').format('ddd D MMM') + ' à 5pm',
        moment().add(3, 'days').format('ddd D MMM') + ' à 1pm',
        moment().add(3, 'days').format('ddd D MMM') + ' à 6pm',
    ];

    console.log('options: ', options);
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Choisissez un créneau horaire pour venir essayer votre prochain véhicule.`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + options[2]
                    }]
            }
        }
    };
};

exports.renderRooms = response => {
    return {
        "text":"Et pour finir, souhaitez-vous que nous étudions avec vous une solution de financement?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Qui",
            "payload":"q3,true"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"q3,false"
          }
        ]
    }
};

exports.formatRecommendation = rec => {

    let elements = [];
        elements.push(  
            {
                title: 'SUV 2008',
                subtitle: `A partir de 16 050€ TTC. Ou 189 €/mois après un premier loyer de 4.031 €`,
                "image_url": 'https://www.dropbox.com/s/s5vk994jyufnwhy/2008.png?raw=1',
                "buttons": [
                    {
                        "type":"web_url",
                        "url":"https://www.facebook.com/PSA-Peugeot-Citroen-ChatBot-1840047882950140/",
                        "title":"Avis Communauté"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’essai route",
                        "payload": "schedule_visit"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’offre",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'SUV 3008',
                subtitle: `A partir de 25 900€ TTC. Ou 313 €/mois après un premier loyer de 6.494 €`,
                "image_url": 'https://www.dropbox.com/s/eaki20wfacq678w/3008.png?raw=1',
                "buttons": [
                    {
                        "type":"web_url",
                        "url":"https://www.facebook.com/PSA-Peugeot-Citroen-ChatBot-1840047882950140/",
                        "title":"Avis Communauté"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’essai route",
                        "payload": "schedule_visit"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’offre",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'SUV 5008',
                subtitle: `A partir de 26 400€ TTC. Ou 313 €/mois après un premier loyer de 6.618 €`,
                "image_url": 'https://www.dropbox.com/s/vtznsub4xf6bq2i/5008.png?raw=1',
                "buttons": [
                    {
                        "type":"web_url",
                        "url":"https://www.facebook.com/PSA-Peugeot-Citroen-ChatBot-1840047882950140/",
                        "title":"Avis Communauté"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’essai route",
                        "payload": "schedule_visit"
                    },
                    {
                        "type": "postback",
                        "title": "Demande d’offre",
                        "payload": "blank"
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

exports.sendLocation = response => {
    return {
        "text":"Où êtes-vous situé?",
        "quick_replies":[
          {
            "content_type":"location"
          }
        ]
    }
};
 