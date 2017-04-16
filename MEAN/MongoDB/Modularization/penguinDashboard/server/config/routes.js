var penguin = require('../controllers/penguins.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        penguin.home(req, res)
    })

    app.get('/penguin/new', function(req, res) {
        res.render('new');
    })

    app.get('/penguin/:id', function(req, res) {
        penguin.show(req, res);
    })

    app.get('/penguin/edit/:id', function(req, res) {
        penguin.edit(req, res);
    })

    app.post('/penguin', function(req, res) {
        penguin.create(req, res);
    });

    app.post('/penguin/:id', function(req, res) {
        penguin.update(req, res);
    });

    app.post('/penguin/destroy/:id', function(req, res) {
        penguin.delete(req, res);
    });
}
