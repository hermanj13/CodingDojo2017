var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');

module.exports = {
    show: function(req, res) {
        Order.find({}, function(err, order) {
            res.json({ order: order });
        })
    },
    create: function(req, res) {
        Order.create(req.body, function(err, order) {
            if (err) { res.json(err) }
            res.json({ order: order });
        })
    }
}
