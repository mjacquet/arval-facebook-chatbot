"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.q2 = (sender, values) => {
	console.log('q2');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Pouvez-vous préciser la réservation ?`}, sender);
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send(formatter.question3(response), sender);
        });
    });
};

exports.q3 = (sender, values) => {
    console.log('q3');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send(formatter.question4(response), sender);
        });
    });
};

exports.q4 = (sender, values) => {
    console.log('q4');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send(formatter.question5(response), sender);
        });
    });
};

exports.q5 = (sender, values) => {
    console.log('q5');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send(formatter.question6(response), sender);
        });
    });
};

exports.q6 = (sender, values) => {
    console.log('q6');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send(formatter.question7(response), sender);
        });
    });
};

exports.q7 = (sender, values) => {
    console.log('q7');
    console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        salesforce.updateCase(values).then(updatedCase => {
            messenger.send({text: `OK, un agent va prendre votre requête`}, sender);
        });
    });
};
/*
exports.q4 = (sender, values) => {
	console.log('q4');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hang on for a sec, be right back with you...`}, sender);
        setTimeout(function(){
            messenger.getWeather(response).then(getWeatherResponse =>{
                messenger.send({text: `OK ${response.first_name}, here is some nice gear for your run. I checked your profile and they are all available in your size. It looks like it is going to be ${getWeatherResponse.outlook2} weather in ${getWeatherResponse.location} on ${getWeatherResponse.datetime} so I filtered results accordingly for you.`}, sender);
            });
        },500);
        setTimeout(function(){
            salesforce.getUserDetails(response).then(userDetails => {
                messenger.getSuggestion(userDetails).then(suggestionResult => {
                    salesforce.getRecommendation(suggestionResult, userDetails).then(recResult => {
                        messenger.send(formatter.question5(recResult), sender);
                    });
                });
            });
        },600);
        setTimeout(function(){
            messenger.send({text: `Are you interested in any of those items? If yes, just click on the item to put it into the shopping cart`}, sender);
        },3000);
        
    });
};
*/