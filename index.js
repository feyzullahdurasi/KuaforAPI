require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS kütüphanesini içe aktar
const authRoutes = require('./routes/authRoutes');
const barberRoutes = require('./routes/barberRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Middleware'ler
app.use(cors()); // CORS middleware'ini ekle
app.use(express.json());

// Veritabanı Bağlantısı
const connectDB = require('./config/db');
connectDB();

// Rotalar
app.use('/api/auth', authRoutes);
app.use('/api/barbers', barberRoutes);
app.use('/api/appointments', appointmentRoutes);

// Sunucu Başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
