var _ = require('underscore');
var models = require('../models');
var CartItem = models.Item;
var Items = models.Items;

var show = function (req, res) {

    var data = CartItem.findAll();
    res.render('list', { data: data });

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

    var newItem = new Item.ItemModel(itemToAdd);

    newItem.save(function (err) {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: 'An error occurred' });
        }

        res.json({ redirect: '/list' });
    });

};

module.exports.show = show;
module.exports.addItem = addItem;