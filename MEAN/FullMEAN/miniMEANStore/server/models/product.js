var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var min = [0, '{{VALUE}} must be greater then 0!'];

var ProductSchema = new Schema({
    name: { type: String, required: 'A girl has no name?' },
    image: { type: String, required: 'Image is required' },
    description: { type: String, required: 'Description is required' },
    quantity: { type: Number, required: 'Quantity is required', min: min },
}, { timestamps: true })

mongoose.model('Product', ProductSchema);
