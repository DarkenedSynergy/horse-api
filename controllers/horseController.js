const Horse = require('../models/Horse');

// Haal alle paarden op met limit en offset
exports.getAllHorses = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
        const horses = await Horse.find().skip(parseInt(offset)).limit(parseInt(limit));
        res.json(horses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Haal details van één paard op
exports.getHorseById = async (req, res) => {
    try {
        const horse = await Horse.findById(req.params.id);
        if (!horse) return res.status(404).json({ message: 'Horse not found' });
        res.json(horse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Voeg een nieuw paard toe
exports.createHorse = async (req, res) => {
    const { name, age, breed, isAvailable } = req.body;

    if (!name || !age || !breed) {
        return res.status(400).json({ message: 'Name, age, and breed are required' });
    }

    try {
        const newHorse = new Horse({ name, age, breed, isAvailable });
        await newHorse.save();
        res.status(201).json(newHorse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update een bestaand paard
exports.updateHorse = async (req, res) => {
    const { name, age, breed, isAvailable } = req.body;

    try {
        const horse = await Horse.findByIdAndUpdate(
            req.params.id,
            { name, age, breed, isAvailable },
            { new: true, runValidators: true }
        );

        if (!horse) return res.status(404).json({ message: 'Horse not found' });

        res.json(horse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Verwijder een paard
exports.deleteHorse = async (req, res) => {
    try {
        const horse = await Horse.findByIdAndDelete(req.params.id);
        if (!horse) return res.status(404).json({ message: 'Horse not found' });
        res.json({ message: 'Horse deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Voeg meerdere paarden tegelijk toe
exports.bulkInsertHorses = async (req, res) => {
    try {
      const horses = await Horse.insertMany(req.body);
      res.status(201).json(horses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Zoek paarden op basis van een zoekterm
  exports.searchHorses = async (req, res) => {
    const { breed, minAge, maxAge } = req.query;
  
    const query = {};
    if (breed) query.breed = breed;
    if (minAge) query.age = { $gte: minAge };
    if (maxAge) query.age = { ...query.age, $lte: maxAge };
  
    try {
      const horses = await Horse.find(query);
      res.json(horses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

    // Update de beschikbaarheid van een paard
    exports.updateAvailability = async (req, res) => {
        const { id } = req.params;
        const { isAvailable } = req.body;
    
        if (typeof isAvailable !== 'boolean') {
            return res.status(400).json({ message: 'isAvailable moet een boolean zijn.' });
        }
    
        try {
            const horse = await Horse.findByIdAndUpdate(
                id,
                { isAvailable },
                { new: true } // Retourneer het bijgewerkte document
            );
    
            if (!horse) {
                return res.status(404).json({ message: 'Paard niet gevonden.' });
            }
    
            res.json(horse);
        } catch (error) {
            res.status(500).json({ message: 'Fout bij het bijwerken van beschikbaarheid.', error });
        }
    };