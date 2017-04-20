var mongoose = require('mongoose');
var User = mongoose.model('User')
var Post = mongoose.model('Post')

module.exports = {
    index: function(req, res) {
        Post.find({})
            .populate('comments')
            .populate('_user', 'name')
            .exec(function(err, posts) {
                if (err) { return res.json(err); }
                return res.json({ posts: posts });
            })
    },
    create: function(req, res) {
        User.findOne({ _id: req.body._user }, function(err, user) {
            if (err) { return res.json(err); };
            Post.create(req.body, function(err, post) {
                if (err) { return res.json(err); };
                user.posts.push(post._id);
                user.save(function(err) {
                    if (err) { return res.json(err); }
                });
                return res.json(post);
            });
        });
    },
}
