const mongoose = require('mongoose');

// MongoDB bağlantı URL'sini tanımlayın
const connectDB = async () => {
    try {
        // MongoDB bağlantısını kurun
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
