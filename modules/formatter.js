"use strict";

//https://john-paul-facebook-bot-demo.herokuapp.com/images?location.jpg

let moment = require("moment"),
    numeral = require("numeral");

exports.question1 = response => {
    console.log('question1');
    return {
        "text":"Bonjour " + response.first_name + " et bienvenue chez Yves Rocher. Que puis-je faire pour vous ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Découvrir nos produits",
            "payload":"q1,Découvrir nos produits"
          },
          {
            "content_type":"text",
            "title":"Découvrir nos soins",
            "payload":"q1,Découvrir nos soins"
          },
          {
            "content_type":"text",
            "title":"Découvrir la fondation Yves Rocher",
            "payload":"q1,Découvrir la fondation Yves Rocher"
          },
          {
            "content_type":"text",
            "title":"Trouver votre magasin le plus proche",
            "payload":"q1,Trouver votre magasin le plus proche"
          }
        ]
    }
};

exports.question2 = response => {
    console.log('question2');
    return {
        "text":"Très bien ! Dites-moi ce qui vous intéresse.",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Soin visage",
            "payload":"q2,Soin visage"
          },
          {
            "content_type":"text",
            "title":"Maquillage",
            "payload":"q2,Maquillage"
          },
          {
            "content_type":"text",
            "title":"Parfum",
            "payload":"q2,Parfum"
          },
          {
            "content_type":"text",
            "title":"Corps & douche",
            "payload":"q2,Corps & douche"
          },
          {
            "content_type":"text",
            "title":"Cheveux",
            "payload":"q2,Cheveux"
          }
        ]
    }
};

exports.question3 = response => {
    console.log('question3');
    return {
        "text":"D'accord ! Cherchons ensemble les soins qui vous conviennent le mieux. Que souhaitez-vous améliorer ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Le confort de ma peau",
            "payload":"q3,Le confort de ma peau"
          },
          {
            "content_type":"text",
            "title":"Mes zones de brillance",
            "payload":"q3,Mes zones de brillance"
          },
          {
            "content_type":"text",
            "title":"Les rougeurs et échauffement",
            "payload":"q3,Les rougeurs et échauffement"
          },
          {
            "content_type":"text",
            "title":"Les rides qui marquent",
            "payload":"q3,Les rides qui marquent"
          },
          {
            "content_type":"text",
            "title":"Les tâches pigmentaires",
            "payload":"q3,Les tâches pigmentaires"
          },
          {
            "content_type":"text",
            "title":"La fermeté de ma peau",
            "payload":"q3,La fermeté de ma peau"
          }
        ]
    }
};

exports.picture4 = response => {
    console.log('question4');
    let elements = [];
        elements.push(  
            {
                title: 'Image',
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide1.png'
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

exports.question4 = response => {
    console.log('question4');
    return {
        "text":"Dites moi, votre peau est plutôt...",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Grasse",
            "payload":"q4,Grasse"
          },
          {
            "content_type":"text",
            "title":"Normale à mixte",
            "payload":"q4,Normale à mixte"
          },
          {
            "content_type":"text",
            "title":"Normale",
            "payload":"q4,Normale"
          },
          {
            "content_type":"text",
            "title":"Normale à sèche",
            "payload":"q4,Normale à sèche"
          },
          {
            "content_type":"text",
            "title":"Sèche à très sèche",
            "payload":"q4,Sèche à très sèche"
          }
        ]
    }
};

exports.picture5 = response => {
    console.log('picture5');
    let elements = [];
        elements.push(  
            {
                title: 'Image',
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?slide2.png'
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

exports.question5 = response => {
    console.log('question5');
    return {
        "text":"Et face aux agressions votre peau...",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"N'est pas particulièrement sensible",
            "payload":"q5,N'est pas particulièrement sensible"
          },
          {
            "content_type":"text",
            "title":"Est sensible et elle tiraille",
            "payload":"q5,Est sensible et elle tiraille"
          },
          {
            "content_type":"text",
            "title":"Est réactive et elle rougit",
            "payload":"q5,Est réactive et elle rougit"
          }
        ]
    }
};

exports.question6 = response => {
    console.log('question6');
    return {
        "text":"D'accord ! Dernière question, quels sont les produits que vous utilisez régulièrement ?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Gel nettoyant",
            "payload":"q6,Gel nettoyant"
          },
          {
            "content_type":"text",
            "title":"Crème de nuit",
            "payload":"q6,Crème de nuit"
          },
          {
            "content_type":"text",
            "title":"Sérum",
            "payload":"q6,Sérum"
          },
          {
            "content_type":"text",
            "title":"Compléments alimentaires",
            "payload":"q6,Compléments alimentaires"
          },
          {
            "content_type":"text",
            "title":"Crème de jour",
            "payload":"q6,Crème de jour"
          },
          {
            "content_type":"text",
            "title":"Gommage",
            "payload":"q6,Gommage"
          },
          {
            "content_type":"text",
            "title":"Masque",
            "payload":"q6,Masque"
          },
          {
            "content_type":"text",
            "title":"Démaquillant non rincé",
            "payload":"q6,Démaquillant non rincé"
          },
          {
            "content_type":"text",
            "title":"Contour des yeux",
            "payload":"q6,Contour des yeux"
          }
        ]
    }
};

exports.question7 = response => {
    console.log('question7');
    let elements = [];
        elements.push(  
            {
                title: 'Sérum Ultra Lissant - RIDES & ECLAT',
                subtitle: "L'éclat en concentré - 20,80 €",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr1.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Avis de la Communauté",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Ajouter à mon panier",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Contacter un conseiller",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'Soin Lissant Jour Tous types de peaux - RIDES & ECLAT',
                subtitle: "Lisse et ravive l'éclat de la peau - 20,80 €",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr2.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Avis de la Communauté",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Ajouter à mon panier",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Contacter un conseiller",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'Soin Lissant Nuit Tous types de peaux - RIDES & ECLAT',
                subtitle: "Au réveil, la peau est comme rénovée, l’éclat ravivé - 20,80 €",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr3.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Avis de la Communauté",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Ajouter à mon panier",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Contacter un conseiller",
                        "payload": "blank"
                    }
                ]
            },
            {
                title: 'Soin Institut Lissant - Soin à la Ficoïde Glaciale',
                subtitle: "Lissez vos rides et tonifiez votre peau - 1h15 - 70 €",
                "image_url": 'https://yves-rocher-chatbot.herokuapp.com/images?Yr4.jpg',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Avis de la Communauté",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Prendre rendez-vous",
                        "payload": "blank"
                    },
                    {
                        "type": "postback",
                        "title": "Localiser l'institut le plus proche",
                        "payload": "findPin"
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
/*
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