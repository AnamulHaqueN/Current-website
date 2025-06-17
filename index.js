const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Appointment = require("./models/Appointment.js");

const app = express();
const port = 8080;

// MongoDB Connection
main().then((res)=>{
    console.log("mongodb is connected successfully");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/appointmentbooking");
}
// Connect to whatsapp DB (separate connection)
const whatsappConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/whatsapp");

// Load Chat model using whatsappConnection
const Chat = whatsappConnection.model("Chat", require('./models/chat'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Homepage route
app.get('/', (req, res) => {
    res.render('index'); // your ejs file
});
// about route
app.get('/about', (req, res) => {
  res.render('about');
});
// service route
app.get('/service', (req, res) => {
  res.render('service');
});
//pricing route
app.get('/pricing', (req, res) => {
  res.render('pricing');
});
//contact route
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get("/chats", async(req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("chat.ejs", {chats});
});

app.get("/appointments", async(req, res) => {
    let appointments = await Appointment.find();
    console.log(appointments);
    res.render("newAppointment.ejs", {appointments});
});

// add appointment route
app.post("/appointments", async (req, res) => {
  try {
    const newAppointment = new Appointment({
      department: req.body.department,
      doctor: req.body.doctor,
      patient_name: req.body.patient_name,
      patient_email: req.body.patient_email,
      appointment_date: req.body.appointment_date,
      appointment_time: req.body.appointment_time,
    });
    await newAppointment.save();
    res.redirect("/appointments"); // or show success message
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).send("Something went wrong.");
  }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
