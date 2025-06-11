const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
  try {
    const { name, specialization } = req.query;
    const query = {};

    if (name) query.name = new RegExp(name, 'i');
    if (specialization) query.specialization = new RegExp(specialization, 'i');

    const doctors = await Doctor.find(query);
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addDoctor = async (req, res) => {
  const newDoctor = new Doctor(req.body);
  const saved = await newDoctor.save();
  res.status(201).json(saved);
};
