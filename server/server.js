// server/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();      // Load environment variables
connectDB();          // Connect to MongoDB

const app = express();
app.use(express.json());

app.use('/api/doctors', doctorRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
