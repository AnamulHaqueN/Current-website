// models/Appointment.js
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    patient_email: {
        type: String,
        required: true
    },
    appointment_date: {
        type: String,  // or Date if you properly format it
        required: true
    },
    appointment_time: {
        type: String,  // or Date if time is stored precisely
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
