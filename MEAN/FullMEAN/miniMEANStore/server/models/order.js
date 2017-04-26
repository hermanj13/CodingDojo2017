var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var min = [0, '{{VALUE}} must be greater then 0!'];

var OrderSchema = new Schema({
    customer: { type: String, required: 'Customer is required' },
    product: { type: String, required: 'A girl has no name?' },
    quantity: { type: Number, required: 'Quantity is required', min: min },
}, { timestamps: true })

mongoose.model('Order', OrderSchema);
