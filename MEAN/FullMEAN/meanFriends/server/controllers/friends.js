var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')
module.exports = {
    index: function(req, res) {
        Friend.find({}, function(err, results) {
            res.json({ friends: results });
        })
    },
    create: function(req, res) {
        Friend.create(req.body, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json({ friends: results });
            }
        })
    },
    update: function(req, res) {
        Friend.update({ '_id': req.params.id }, req.body, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json({ friends: results });
            }
        })
    },
    delete: function(req, res) {
        Friend.deleteOne({ '_id': req.params.id }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.json({ placeholder: 'delete' });
            }
        })
    },
    show: function(req, res) {
        Friend.findOne({ '_id': req.params.id }, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json({ friend: results });
            }
        })
    }
}
