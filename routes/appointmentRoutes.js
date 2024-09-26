const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createAppointment);

module.exports = router;
