// Require the Express Module
var express = require('express');
// Require Mongoose
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
// Create an Express App
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        res.render('index', {
            users
        });
    })
})
// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({
        name: req.body.name,
        age: req.body.age
    });
    user.save(function(err) {
        if (err) {
            res.render('index', {
                title: 'you have errors!',
                errors: user.errors
            })
        } else {
            res.redirect('/');
        }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
