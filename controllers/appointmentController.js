const Appointment = require('../models/Appointment');

// Randevu oluşturma
const createAppointment = async (req, res) => {
    const { barberId, date, service } = req.body;

    try {
        const appointment = new Appointment({
            user: req.user.id, // Kullanıcı kimliği
            barber: barberId,
            date,
            service
        });

        await appointment.save();
        res.status(201).json(appointment);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Modülü dışa aktar
module.exports = {
    createAppointment
};
