const Barber = require('../models/Barber');

const getBarbers = async (req, res) => {
    try {
        const barbers = await Barber.find();
        res.status(200).json(barbers);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBarbers };
