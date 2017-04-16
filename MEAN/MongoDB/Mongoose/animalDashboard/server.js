// Require the Express Module
var express = require('express');
// Require Mongoose
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/animalDashboard');
// Create an Express App
var PenguinSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
}, { timestamps: true })

mongoose.model('Penguin', PenguinSchema);
var Penguin = mongoose.model('Penguin');


var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
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
    Penguin.find({}, function(err, penguins) {
        res.render('index', { penguins });
    })
})

app.get('/penguin/new', function(req, res) {
    res.render('new');
})

app.get('/penguin/:id', function(req, res) {
    Penguin.find({ '_id': req.params.id }, function(err, penguin) {
        res.render('show', { penguin });
    })
})

app.get('/penguin/edit/:id', function(req, res) {
    Penguin.find({ '_id': req.params.id }, function(err, penguin) {
        res.render('edit', { penguin });
    })
})

app.post('/penguin', function(req, res) {
    Penguin.create(req.body, function(err) {
        res.redirect('/')
    })
});

app.post('/penguin/:id', function(req, res) {
    Penguin.update({ '_id': req.params.id }, req.body, function(err) {
        res.redirect('/penguin/' + req.params.id)
    })
});

app.post('/penguin/destroy/:id', function(req, res) {
    Penguin.deleteOne({ '_id': req.params.id }, function(err) {
        res.redirect('/')
    })
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
