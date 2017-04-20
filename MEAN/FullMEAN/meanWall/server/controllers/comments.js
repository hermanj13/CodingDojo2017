var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')
var Post = mongoose.model('Post')

module.exports = {
    create: function(req, res) {
        User.findOne({ _id: req.body._user }, function(err, user) {
            if (err) { return res.json(err); };
            Post.findOne({ _id: req.body._post }, function(err, post) {
                if (err) { return res.json(err); };
                Comment.create(req.body, function(err, comment) {
                    if (err) { return res.json(err); };
                    user.comments.push(comment);
                    user.save(function(err) {
                        if (err) { return res.json(err) }
                    });
                    post.comments.push(comment);
                    post.save(function(err) {
                        if (err) { return res.json(err) }
                    });
                    return res.json(comment)
                })
            });
        });
    }
}
