var users = require('../controllers/users.js')
module.exports = function(app){
	app.post('/users', users.create);
	// app.get('/users', users.index);
	// app.get('/users/:id', users.show)
	// app.put('/users/:id', users.update);
	// app.delete('/users/:id', users.delete);
}