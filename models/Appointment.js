const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    service: {
        type: String,
        required: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
