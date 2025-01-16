const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z]+$/.test(value); // Geen cijfers toegestaan
            },
            message: 'First name cannot contain numbers',
        },
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0, // Leeftijd moet positief zijn
    },
});

module.exports = mongoose.model('User', UserSchema);
