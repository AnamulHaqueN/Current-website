const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    department: String,
    doctor: String,
    name: String,
    email: String,
    date: String,
    time: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
