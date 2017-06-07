"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.question2 = response => {
    console.log('question2');
    return {
        "text":"Where will you run? Based on your location here are some popular spots near you:",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Hamburg",
            "payload":"q2,Hamburg"
          },
          {
            "content_type":"text",
            "title":"Munich",
            "payload":"q2,Munich"
          },
          {
            "content_type":"text",
            "title":"Cologne",
            "payload":"q2,Cologne"
          },
          {
            "content_type":"text",
            "title":"Berlin",
            "payload":"q2,Berlin"
          },
          {
            "content_type":"text",
            "title":"Frankfurt",
            "payload":"q2,Frankfurt"
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
        elements.push(  
            {
                title: 'SUV 2008',
                subtitle: `A partir de 16 050€ TTC. Ou 189 €/mois après un premier loyer de 4.031 €`,
                "image_url": 'https://www.dropbox.com/s/s5vk994jyufnwhy/2008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 3008',
                subtitle: `A partir de 25 900€ TTC. Ou 313 €/mois après un premier loyer de 6.494 €`,
                "image_url": 'https://www.dropbox.com/s/eaki20wfacq678w/3008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 5008',
                subtitle: `A partir de 26 400€ TTC. Ou 313 €/mois après un premier loyer de 6.618 €`,
                "image_url": 'https://www.dropbox.com/s/vtznsub4xf6bq2i/5008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
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
