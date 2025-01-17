const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
});

// Validatie: Controleer dat end_date na start_date is
raceSchema.pre('save', function (next) {
    if (this.end_date <= this.start_date) {
        return next(new Error('De einddatum moet na de startdatum liggen.'));
    }
    next();
});

module.exports = mongoose.model('Race', raceSchema);
