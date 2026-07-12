const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from the .env file
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Middleware to parse JSON and allow cross-origin requests from the frontend
app.use(cors());
app.use(express.json());

// ---> ADD THIS LINE TO MOUNT THE AUTH ROUTES <---
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/plants', require('./routes/plantRoutes'));         // ADD THIS
app.use('/api/favorites', require('./routes/favoriteRoutes'));   // ADD THIS

// A simple test route to verify the API is alive
app.get('/', (req, res) => {
  res.send('Virtual Herbal Garden API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});