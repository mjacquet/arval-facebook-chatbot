"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.question2 = response => {
    console.log('question2');
    return {
        "text":"Une réclamation, d'accord, à propos :",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Réservation passée",
            "payload":"q2,Réservation passée"
          },
          {
            "content_type":"text",
            "title":"Réservations en cours",
            "payload":"q2,Réservations en cours"
          },
          {
            "content_type":"text",
            "title":"Réservation future",
            "payload":"q2,Réservation future"
          }
        ]
    }
};

exports.question3 = response => {
    console.log('question3');
    return {
        "text":"Pouvez-vous préciser la réservation ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Kyriad-02/04/2107",
            "payload":"q3,Kyriad-02/04/2107"
          },
          {
            "content_type":"text",
            "title":"Campanile-12/05/2017",
            "payload":"q3,Campanile-12/05/2017"
          },
          {
            "content_type":"text",
            "title":"Campanile-23/06/2017",
            "payload":"q3,Campanile-23/06/2017"
          }
        ]
    }
};

exports.question4 = response => {
    console.log('question4');
    return {
        "text":"Pouvez-vous préciser la nature de la réclamation ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Assistance",
            "payload":"q4,Assistance"
          },
          {
            "content_type":"text",
            "title":"Réclamation",
            "payload":"q4,Réclamation"
          }
        ]
    }
};


exports.question5 = response => {
    console.log('question5');
    return {
        "text":"Quel est le motif de votre réclamation ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Paiement",
            "payload":"q5,Paiement"
          },
          {
            "content_type":"text",
            "title":"Duplicata",
            "payload":"q5,Duplicata"
          }
        ]
    }
};

exports.question6 = response => {
    console.log('question6');
    return {
        "text":"Comment souhaitez-vous etre recontacté ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Phone",
            "payload":"q6,Phone"
          },
          {
            "content_type":"text",
            "title":"Mail",
            "payload":"q6,Mail"
          },
          {
            "content_type":"text",
            "title":"SMS",
            "payload":"q6,SMS"
          },
          {
            "content_type":"text",
            "title":"Messenger",
            "payload":"q6,Messenger"
          }
        ]
    }
};

exports.question7 = response => {
    console.log('question7');
    return {
        "text":"Souhaitez-vous être mise en relation avec un agent ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Oui",
            "payload":"q7,Oui"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"q7,Non"
          }
        ]
    }
};
/*
exports.question3 = response => {
    //moment.lang('de');
    
    var options = [
        moment().add(1, 'days').add(1, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(2, 'days').add(2, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(3, 'days').add(3, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(4, 'days').add(4, 'hours').format('ddd Do MMM [at] ha'),
        moment().add(5, 'days').add(5, 'hours').format('ddd Do MMM [at] ha'),
    ];

    console.log('options: ', options);
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `When will you run?`,
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
                        "payload": "confirm_visit," + options[3]
                    }]
            }
        }
    };
};

exports.question4 = response => {
    return {
        "text":"Are you going to run yourself?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Yes",
            "payload":"q4,Yes"
          },
          {
            "content_type":"text",
            "title":"No",
            "payload":"q4,No"
          }
        ]
    }
};

exports.question5 = response => {
    console.log('In question5: ', response);

    let elements = [];
    response.forEach(rec => {
            elements.push({
                title: rec.get("Name"),
                subtitle: rec.get("Description"),
                "image_url": rec.get("Image_URL__c"),
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
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
*/