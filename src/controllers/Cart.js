var _ = require('underscore');
var models = require('../models');
var CartItem = models.Item;
var Items = models.Items.Items;

var show = function (req, res) {

    var data = CartItem.findAll(function (err, data) {

        if (err) {
            console.log(err);
            return res.status(400).json({ error: 'An error occurred' });
        }
        console.log("return data = " + JSON.stringify(data));
        res.render('cart', { data: data });
    });
    

};

var addItem = function (req, res) {

    var itemName = req.params.name;
    console.log(itemName);
    var itemToAdd = {};
    for (var i = 0; i < Items.length; i++) {
        if (Items[i].name == itemName) {
            itemToAdd = Items[i];
        }
    }

    var newItem = new CartItem.ItemModel(itemToAdd);

    newItem.save(function (err, docs) {

        if (err) {
            console.log(err);
            return res.status(400).json({ error: 'An error occurred' });
        }

        show(req, res);
    });

};

module.exports.show = show;
module.exports.addItem = addItem;