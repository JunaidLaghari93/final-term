const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const poetryRoutes = require('./routes/poetryRoute');

// Connect to MongoDB
const DB_URL = 'mongodb+srv://jlaghari93:jlaghari93@cluster0.veqvvb8.mongodb.net/?retryWrites=true&w=majority';

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use cors middleware to handle CORS headers
app.use(cors());

// Routes
app.use('/api', poetryRoutes);


mongoose.connect(DB_URL).then(() => { console.log('Connected to database') }).catch((error) => { console.log(error) });


app.listen(5000, () => { console.log('Server has started') });
