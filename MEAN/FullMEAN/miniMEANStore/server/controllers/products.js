var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    show: function(req, res) {
        Product.find({}, function(err, product) {
            res.json({ product: product });
        })
    },
    create: function(req, res) {
        Product.create(req.body, function(err, product) {
            if (err) { res.json(err) }
            res.json({ product: product });
        })
    }
}
