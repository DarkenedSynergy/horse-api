const express = require('express');
const router = express.Router();
const Race = require('../models/Race');

// GET: Haal alle races op
router.get('/', async (req, res) => {
    try {
        const races = await Race.find();
        res.json(races);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: Voeg een nieuwe race toe
router.post('/', async (req, res) => {
    const race = new Race({
        name: req.body.name,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
    });

    try {
        const newRace = await race.save();
        res.status(201).json(newRace);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Verwijder alle races
router.delete('/clear', async (req, res) => {
    try {
        await Race.deleteMany();
        res.status(200).json({ message: 'Alle races zijn verwijderd.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
