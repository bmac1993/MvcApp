var crypto = require('crypto');
var mongoose = require('mongoose');

var ItemModel;

var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^[A-Za-z0-9_\-\.]{1,16}$/
    },

    price: {
        type: Number,
        required: true
    }
});

ItemSchema.methods.toAPI = function () {
    //_id is built into your mongo document and is guaranteed to be unique
    return {
        name: this.name,
        _id: this._id
    };
};

ItemSchema.statics.findAll = function () {

    return ItemModel.find();
};


ItemModel = mongoose.model('Item', ItemSchema);


module.exports.ItemModel = ItemModel;
module.exports.ItemSchema = ItemSchema;