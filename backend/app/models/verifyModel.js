const mongoose = require('mongoose');

module.exports = mongoose.model('Verify', {
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    }
})