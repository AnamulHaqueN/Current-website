const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
    const { department, doctor, name, email, date, time } = req.body;

    try {
        const newAppointment = new Appointment({ department, doctor, name, email, date, time });
        await newAppointment.save();
        res.redirect('/'); // redirect to home or success page
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
