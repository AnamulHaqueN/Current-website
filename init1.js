const mongoose = require("mongoose");
const Appointment = require("./models/Appointment.js");

main().then((res) => {
    console.log("Connection is successful !");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/appointmentbooking");
}

let appointments = [
  {
    department: "Cardiology",
    doctor: "Dr. Smith",
    patient_name: "John Doe",
    patient_email: "john@example.com",
    appointment_date: "2025-06-20",
    appointment_time: "10:30 AM"
  },
  {
    department: "Neurology",
    doctor: "Dr. Emily",
    patient_name: "Sara Ali",
    patient_email: "sara@example.com",
    appointment_date: "2025-06-21",
    appointment_time: "02:00 PM"
  },
  {
    department: "Dermatology",
    doctor: "Dr. Rahul",
    patient_name: "Mike Tyson",
    patient_email: "mike@example.com",
    appointment_date: "2025-06-22",
    appointment_time: "11:00 AM"
  }
];

// Insert sample data
Appointment.insertMany(appointments)
  .then((res) => {
    console.log("Sample appointments inserted successfully!");
    console.log(res);
  })
  .catch((err) => {
    console.error("Error inserting appointments:", err);
});