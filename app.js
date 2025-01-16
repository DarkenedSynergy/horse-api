require('dotenv').config(); // Laad .env-variabelen
const express = require('express');
const connectDB = require('./config/database');

const userRoutes = require('./routes/users'); // Routes voor users
const horseRoutes = require('./routes/horses'); // Routes voor horses

const app = express();

// Middleware
app.use(express.json()); // Voor het verwerken van JSON-body's
app.use(express.static('public')); // Voor de documentatiepagina

// Verbind met database
connectDB();

// Basisroute voor documentatiepagina
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// API-routes
app.use('/users', userRoutes);
app.use('/horses', horseRoutes);

// Bulk insert support voor users en horses
app.post('/users/bulk', async (req, res) => {
    try {
        const users = await require('./models/User').insertMany(req.body);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/horses/bulk', async (req, res) => {
    try {
        const horses = await require('./models/Horse').insertMany(req.body);
        res.status(201).json(horses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fallback voor niet-bestaande routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start de server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
