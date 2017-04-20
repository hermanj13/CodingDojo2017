var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String
},{timestamps:true})

mongoose.model('User', UserSchema); //For more information, research mongoose schemas
