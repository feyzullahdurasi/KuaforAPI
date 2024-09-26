require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const barberRoutes = require('./routes/barberRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Middleware'ler
app.use(express.json());

// Veritabanı Bağlantısı
const connectDB = require('./config/db');
connectDB();

// Rotalar
app.use('/api/auth', authRoutes);
app.use('/api/barbers', barberRoutes);
app.use('/api/appointments', appointmentRoutes);

// Sunucu Başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
