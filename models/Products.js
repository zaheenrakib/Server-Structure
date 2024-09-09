const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Ensures the product name is provided
    },
    details: {
        type: String,
        required: true // Ensures the product details are provided
    },
    price: {
        type: Number,
        required: true, // Ensures the price is provided
        min: 0 // Ensures the price cannot be negative
    },
    quantity: {
        type: String,
        required: true // Ensures the quantity is provided
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assumes a 'User' model exists
         // Ensures the product is associated with a user
    },
    photos: {
        type: [String],
        validate: {
            validator: function(v) {
                return v.length > 0; // Ensures at least one photo is provided
            },
            message: 'A product must have at least one photo'
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
