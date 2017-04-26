var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app) {
    app.get('/customers', customers.show);
    app.get('/products', products.show);
    app.get('/orders', orders.show);
    app.post('/customers', customers.create);
    app.post('/products', products.create);
    app.post('/orders', customers.create);
    app.delete('/customers/:id', customers.delete)
}
