var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: 'Post Needs a Message!' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

mongoose.model('Post', PostSchema);
