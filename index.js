const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Route dosyalarını içe aktar
const userRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const barberRoutes = require('./routes/barberRoutes');

const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/users', userRoutes); // Kullanıcı yolları
app.use('/api/appointments', appointmentRoutes); // Randevu yolları
app.use('/api/barbers', barberRoutes); // Kuaför yolları

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
