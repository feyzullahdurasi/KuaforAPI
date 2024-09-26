const mongoose = require('mongoose');

const barberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    services: [String],
});

const Barber = mongoose.model('Barber', barberSchema);

module.exports = Barber;
