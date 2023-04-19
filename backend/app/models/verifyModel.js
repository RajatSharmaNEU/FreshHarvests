const mongoose = require('mongoose');

module.exports = mongoose.model('Store', {
    name: {
        type: String,
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            }
        }
    ]
})