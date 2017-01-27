"use strict";

let messenger = require('./messenger'),
    formatter = require('./formatter'),
    salesforce = require('./salesforce'),
    visionService = require('./vision-service-mock'),
    nodeGeocoder = require('node-geocoder');

var options = {
      provider: 'google'
};

var geocoder = nodeGeocoder(options);

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
            console.log('attachment.payload.lat: ', attachment.payload.lat);
            console.log('attachment.payload.long: ', attachment.payload.long);
            console.log('geocoder: ', geocoder);


            
            geocoder.reverse({lat:45.767, lon:4.833}).then(function(res) {
                console.log('res: ', res);
            }).catch(function(err) {
                console.log('err: ', err);
            });

            

        } else {
            messenger.send({text: 'This type of attachment is not supported'}, sender);
        }
    }
};
