const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  department: String,
  availableDays: [String],
  contact: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
