var mongoose = require('mongoose');

var PenguinSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
}, { timestamps: true })

var Penguin = mongoose.model('Penguin', PenguinSchema);
