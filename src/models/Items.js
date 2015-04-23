var crypto = require('crypto');
var mongoose = require('mongoose');

var Items = [
    {
        name: "Wrench",
        price: 5
    },
    {
        name: "Shovel",
        price: 20,
    },
    {
        name: "Dibber",
        price: 10,
    },
    {
        name: "Rake",
        price: 30,
    }
];


module.exports.Items = Items;