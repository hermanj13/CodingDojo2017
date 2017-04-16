// Require the Express Module
var express = require('express');
// Require Mongoose
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/quotingDojo');
// Create an Express App
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
}, { timestamps: true })

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')


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
    res.render('index');
})
app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
        res.redirect('/quotes')
    })
})
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        res.render('quotes', { quotes })
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
