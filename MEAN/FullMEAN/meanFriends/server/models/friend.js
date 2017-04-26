var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  first: String,
  last: String,
  birth: Date,
}, { timestamps: true })

mongoose.model('Friend', FriendSchema)
