var comments = require('../controllers/comments.js');
var posts = require('../controllers/posts.js');
var users = require('../controllers/users.js');

module.exports = function(app) {
    app.post('/users', users.login);
    app.get('/posts', posts.index);
    app.post('/posts', posts.create);
    app.post('/comments', comments.create);
}
