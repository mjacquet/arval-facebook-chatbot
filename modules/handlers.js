"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');
    //123 test push

exports.test = (sender) => {
    console.log('test');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `test Success`}, sender);
    });
};

exports.start = (sender) => {
    console.log('start');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hi, i'm your personal ARVAL BOT, how can i help you today?`}, sender);
    });
};

exports.next1 = (sender) => {
    console.log('next1');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Sure, here is your contract summary:`}, sender);
        setTimeout(function(){
            salesforce.getServiceContract(response).then(recResult => {
                messenger.send(formatter.formatServiceContract(recResult), sender);
            });
        }, 500);
        setTimeout(function(){
            messenger.send({text: `Do you have any questions about your current contract or would you like to proceed to look at additional services?`}, sender);
        }, 2500);

    });
};

exports.next2 = (sender) => {
    console.log('next2');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.formatInsurance(), sender);
    });
};

exports.next3 = (sender) => {
    console.log('next3');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.formatLiveAgent(), sender);
    });
};

exports.getLease = (sender) => {
    console.log('getLease');
    //https://sdo-demo-main-15d2d0523d5.secure.force.com/arval/ChatLead

    let message={
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Leasing Offer",
                "buttons": [
                    {
                      "type":"web_url",
                      "title":"Give us more info",
                      "url": "https://sdo-demo-main-15d2d0523d5.secure.force.com/arval/ChatLead?sender="+sender,
                      "webview_height_ratio": "compact",
                      "messenger_extensions": false,
                      "webview_share_button":"hide"
                    }
                ]

            }
        }
    };
    messenger.send(message, sender);
  //  messenger.send({text: `Sure. I will need some information from you. First, what is your First and Lastname`}, sender);
};

exports.getName = (sender,text) => {
    console.log('getLease '+text);

      salesforce.updateMaxBot('LastName__c',text).then(recResult => {
        messenger.send({text: `Thanks. What is your address?`}, sender);
  });

};

exports.getAddress = (sender,text) => {
    console.log('getAddress '+text);
      salesforce.updateMaxBot('Address__c',text).then(recResult => {
        messenger.send({text: `Good. What is your annual revenue?`}, sender);
  });
};

exports.getRevenue = (sender,text) => {
    console.log('getRevenue '+text);
      salesforce.updateMaxBot('AnnualRevenue__c',text).then(recResult => {
        messenger.send({text: `Thanks. What is your email?`}, sender);
  });
};

exports.getEmail = (sender,text) => {
    console.log('getEmail '+text);
      salesforce.updateMaxBot('Email__c',text).then(recResult => {
        messenger.send({text: `Great. What is your Phone Number?`}, sender);
  });
};

exports.getPhone = (sender,text) => {
    console.log('getPhone '+text);
      salesforce.updateMaxBot('Mobile__c',text).then(recResult => {
        messenger.send({text: `Now, what is the car you'd enjoy driving?`}, sender);
  });
};

exports.leadinfo = (req,res) => {
  messenger.send({text: `Now, what is the car you'd enjoy driving?`}, req.query.sender);
};
