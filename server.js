require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/User.routes');
const crouseRoutes = require('./routes/crouse.routes');
const app = express()
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files
//routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', crouseRoutes)

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})