var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    name: { type: String, required: 'A girl has no name?' },
}, { timestamps: true })

mongoose.model('Customer', CustomerSchema);
