var _ = require('underscore');
var models = require('../models');
var CartItem = models.Item;
var Items = models.Items.Items;

var show = function (req, res) {

    CartItem.ItemModel.findByName(req.params.name, function (err, docs) {

        if (err) {
            console.log(err);
            return res.status(400).json({ error: 'An error occurred' });
        }

        res.render('item', { data: docs });
    });


};

module.exports.show = show;