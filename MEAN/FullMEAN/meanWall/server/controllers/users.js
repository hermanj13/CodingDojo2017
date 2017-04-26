var mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = {
  login: function(req, res) {
    User.findOne({ 'name': req.body.name }, function(err, user) {
      if (!user) {
        User.create(req.body, function(err, user) {
          if (err) { res.json(err) }
          res.json({ user: user });
        })
      } else {
        res.json({ user: user })
      };
    })
  },
}
