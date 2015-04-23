var _ = require('underscore');
var models = require('../models');
var CartItem = models.Item;
var Items = models.Items.Items;

var show = function (req, res) {
    var data = {};
    for (var i = 0; i < Items.length; i++) {
        if (Items[i].name == req.params.name)
            data = Items[i];
    }
    console.log(JSON.stringify(data));
    res.render('item', { data: data });
   


};

module.exports.show = show;