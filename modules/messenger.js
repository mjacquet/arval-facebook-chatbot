"use strict";

let request = require('request'),
    FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
let util = require('util')

exports.send = (message, recipient) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FB_PAGE_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipient},
            message: message
        }
    }, (error, response) => {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        } else{
            console.log('Send: ', response.body);
        }
    });
};

exports.getUserInfo = (userId) => {

    return new Promise((resolve, reject) => {

        request({
            url: `https://graph.facebook.com/v2.6/${userId}`,
            qs: {fields:"first_name,last_name,profile_pic", access_token: FB_PAGE_TOKEN},
            method: 'GET',
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('getUserInfo: ', response.body);
                resolve(JSON.parse(response.body));
            }
        });

    });
};

exports.getSuggestion = (suggestion) => {

    return new Promise((resolve, reject) => {

        request({
            url: `https://pio-octave-engine.herokuapp.com/queries.json`,
            method: 'POST',
            json : { 
                voice_usage: 12,
                data_usage: 0,
                text_usage: 4
            }
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('No Error: ', response.body);
                var theResponse = String(response.body);
                console.log('theResponse: %j', theResponse[0]);
                var theServicePlan = theResponse.length;
                console.log('theServicePlan: ', theServicePlan);
                //var theConstructedString = '{ "service_plan":'+theServicePlan+' }';
                //console.log('theConstructedString: ', theConstructedString);

                resolve(JSON.parse('{ "service_plan":0 '));
                //resolve(JSON.parse(response.body));
            }
        });

    });
};