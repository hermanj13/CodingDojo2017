var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

module.exports = {
    show: function(req, res) {
        Customer.find({}, function(err, customer) {
            res.json({ customer: customer });
        })
    },
    create: function(req, res) {
        Customer.findOne({ 'name': req.body.name }, function(err, customer) {
            if (!customer) {
                Customer.create(req.body, function(err, customer) {
                    if (err) { res.json(err) }
                    res.json({ customer: customer });
                })
            } else {
                res.json({ customer: customer })
            };
        })
    },
    delete: function(req, res) {
        Customer.deleteOne({ '_id': req.params.id }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.json({ placeholder: 'delete' });
            }
        })
    }
}
