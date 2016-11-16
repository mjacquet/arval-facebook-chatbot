"use strict";

let moment = require("moment"),
    numeral = require("numeral");
    
exports.onBoard1 = response => {
    return {
        "text":"Bonjour " + response.first_name + " et bienvenue chez Cumulus Assurance. Que puis-je faire pour vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Découvrir les offres",
            "payload":"button1"
          },
          {
            "content_type":"text",
            "title":"Je suis client",
            "payload":"button2"
          }
        ]
    }
};