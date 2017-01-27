"use strict";

let messenger = require('./messenger'),
    formatter = require('./formatter'),
    salesforce = require('./salesforce'),
    visionService = require('./vision-service-mock'),
    nodeGeocoder = require('node-geocoder');

var options = {
      provider: 'google'
};

//var geocoder = NodeGeocoder(options);

exports.processUpload = (sender, attachments) => {
    if (attachments.length > 0) {
        let attachment = attachments[0];
        console.log('attachment: ', attachment);
        if (attachment.type === "image") {
            console.log('image attachment');
            /*
            messenger.send({text: 'OK, let me look at that picture...'}, sender);
            visionService.classify(attachment.url)
                .then(houseType => {
                    messenger.send({text: `Looking for houses matching "${houseType}"`}, sender);
                    return salesforce.findPropertiesByCategory(houseType)
                })
                .then(properties => messenger.send(formatter.formatProperties(properties), sender))
                */
        }else if (attachment.type === "location") {
            console.log('location attachment');
            /*
            geocoder.reverse({lat: attachment.payload.lat, lon: attachment.payload.long}).then(function(res) {
                console.log(res);
            }).catch(function(err) {
                console.log(err);
            });

            */

        } else {
            messenger.send({text: 'This type of attachment is not supported'}, sender);
        }
    }
};
