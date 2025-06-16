const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/hospital', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const appointmentRoute = require('./routes/appointments');
app.use('/appointment', appointmentRoute);

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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
