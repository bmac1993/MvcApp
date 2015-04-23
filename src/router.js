//import the controller folder (automatically calls the index.js file)
var controllers = require('./controllers'); 
var mid = require('./middleware');

var router = function(app) {

    app.get("/Cart", controllers.Cart.show);
    app.get("/list", controllers.List.show);
    app.get("/", controllers.List.show);
    app.get("/add/:name", controllers.Cart.addItem);
};

module.exports = router; 