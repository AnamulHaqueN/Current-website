const express = require('express');
const router = express.Router();
const { getDoctors, addDoctor } = require('../controllers/doctorController');

router.get('/', getDoctors);      // ?name=Ali&specialization=Cardiology
router.post('/', addDoctor);      // Add new doctor

module.exports = router;
