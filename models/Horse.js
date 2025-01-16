const mongoose = require('mongoose');

const HorseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    breed: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Horse', HorseSchema);
