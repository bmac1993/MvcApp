var crypto = require('crypto');
var mongoose = require('mongoose');

var Items = [
    {
        name: "Wrench",
        price: 5,
        description: "Need to unscrew some stuff and stuff?"
    },
    {
        name: "Shovel",
        price: 20,
        description: "Need to bury your hampster? We got what you need"
    },
    {
        name: "Dibber",
        price: 10,
        description: "This is a Dibber, it's awesome."
    },
    {
        name: "Rake",
        price: 30,
        description: "You rake things with this. It's useful"
    }
];


module.exports.Items = Items;