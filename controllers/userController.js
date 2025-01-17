const User = require('../models/User');

// Haal alle gebruikers op met limit en offset
exports.getAllUsers = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
        const users = await User.find().skip(parseInt(offset)).limit(parseInt(limit));
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Haal details van één gebruiker op
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Voeg een nieuwe gebruiker toe
exports.createUser = async (req, res) => {
    const { firstName, lastName, age, phone } = req.body;

    if (!firstName || !lastName || age === undefined || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newUser = new User({ firstName, lastName, age, phone });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update een bestaande gebruiker
exports.updateUser = async (req, res) => {
    const { firstName, lastName, age, phone } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, age, phone },
            { new: true, runValidators: true }
        );

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Verwijder een gebruiker
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
