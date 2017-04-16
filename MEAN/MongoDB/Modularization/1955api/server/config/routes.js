var person = require('../controllers/persons.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        person.home(req, res);
    })

    app.get('/new/:name', function(req, res) {
        person.create(req, res);
    })

    app.get('/remove/:name', function(req, res) {
        person.delete(req, res);
    })

    app.get('/:name', function(req, res) {
        person.show(req, res);
    })
}
