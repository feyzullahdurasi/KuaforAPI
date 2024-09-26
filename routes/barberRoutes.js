const express = require('express');
const { getBarbers } = require('../controllers/barberController');
const router = express.Router();

router.get('/', getBarbers);

module.exports = router;
