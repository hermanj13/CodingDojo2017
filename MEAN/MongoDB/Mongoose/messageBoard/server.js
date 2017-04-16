// Require the Express Module
var express = require('express');
// Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// Use native promises
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/messageBoard');
// Create an Express App
var PostSchema = new Schema({
    name: { type: String, required: true, minlength: 4 },
    text: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true })
var CommentSchema = new Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true, minlength: 4 },
    text: { type: String, required: true },
}, { timestamps: true })



mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')



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
    Post.find({}).populate('_comments').exec(function(err, post) {
        res.render('index', { post: post });
    })
})

app.post('/new', function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
        if (err) {
            console.log('you have errors!')
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    });
})

app.post('/new/:id', function(req, res) {
    Post.findOne({ '_id': req.params.id }, function(err, post) {
        var comment = new Comment(req.body);
        comment._post = post._id;
        comment.save(function(err) {
            post._comments.push(comment);
            post.save(function(err) {
                if (err) {
                    console.log('you have errors!');
                    res.redirect('/')
                } else {
                    res.redirect('/');
                }
            })
        })
    })
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
