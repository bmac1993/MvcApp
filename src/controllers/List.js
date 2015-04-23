var _ = require('underscore');
var models = require('../models');

var ItemList = models.Items;

var show = function (req, res) {
        
    console.log("test" + JSON.stringify(ItemList));
    var data = ItemList;

    res.render('list', { data: data });
    
};

//var makeDomo = function (req, res) {

//    if (!req.body.name || !req.body.age) {
//        return res.status(400).json({ error: "RAWR! Both name and age are required" });
//    }

//    var domoData = {
//        name: req.body.name,
//        age: req.body.age,
//        owner: req.session.account._id
//    };

//    var newDomo = new Domo.DomoModel(domoData);

//    newDomo.save(function (err) {
//        if (err) {
//            console.log(err);
//            return res.status(400).json({ error: 'An error occurred' });
//        }

//        res.json({ redirect: '/maker' });
//    });

//};

module.exports.show = show;
//module.exports.make = makeDomo;