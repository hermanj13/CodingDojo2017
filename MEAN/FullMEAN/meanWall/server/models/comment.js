var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    text: { type: String, required: 'Comment Needs a Message!' },
}, { timestamps: true });

mongoose.model('Comment', CommentSchema);
