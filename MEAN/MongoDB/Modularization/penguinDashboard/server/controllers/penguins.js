var mongoose = require('mongoose');
var Penguin = mongoose.model('Penguin')
module.exports = {
    home: function(req, res) {
        Penguin.find({}, function(err, penguins) {
            res.render('index', { penguins });
        })
    },
    create: function(req, res) {
        Penguin.create(req.body, function(err) {
            res.redirect('/')
        })
    },
    show: function(req, res) {
        Penguin.find({ '_id': req.params.id }, function(err, penguin) {
            res.render('show', { penguin });
        })
    },
    edit: function(req, res) {
        Penguin.find({ '_id': req.params.id }, function(err, penguin) {
            res.render('edit', { penguin });
        })
    },
    update: function(req, res) {
        Penguin.update({ '_id': req.params.id }, req.body, function(err) {
            res.redirect('/penguin/' + req.params.id)
        })
    },
    delete: function(req, res) {
        Penguin.deleteOne({ '_id': req.params.id }, function(err) {
            res.redirect('/')
        })
    }
}
