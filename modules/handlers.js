"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');
/*
exports.searchHouse = (sender) => {
    messenger.send({text: `OK, looking for houses for sale around you...`}, sender);
    salesforce.findProperties().then(properties => {
        messenger.send(formatter.formatProperties(properties), sender);
    });
};
*/

exports.hi = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}!`}, sender);
    });
};

exports.help = (sender) => {
    messenger.send({text: `You can ask me questions like "Find houses in Boston", "3 bedrooms in Boston", "3 bedrooms in Boston between 500000 and 750000", "show me price changes"`}, sender);
};

exports.onboard1 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        salesforce.createLead(response.first_name, response.last_name, sender).then(() => {
            messenger.send(formatter.onBoard1(response), sender);
        });
    });

};

exports.onboard2 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};

exports.onboard3 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
    });
};

exports.onboard4 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

exports.onboard5 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};

//if user presses any buttons on q1 send to q2
exports.button1 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};
exports.button2 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard2(response), sender);
    });
};

//if user presses any buttons on q2 send to q3
exports.button3 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
    });
};
exports.button4 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
    });
};
exports.button5 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard3(response), sender);
    });
};

//if user presses any buttons on q3 send to q4
exports.button6 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};
exports.button7 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};
exports.button8 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard4(response), sender);
    });
};

//if user presses any buttons on q4 send to q5
exports.button9 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};
exports.button10 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};
exports.button11 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};  
exports.button12 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};  
exports.button13 = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.onBoard5(response), sender);
    });
};  



