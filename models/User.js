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
        validate: {
            validator: function (value) {
                return /^[a-zA-Z]+$/.test(value); // Geen cijfers toegestaan
            },
            message: 'Last name cannot contain numbers',
        },
    },
    age: {
        type: Number,
        required: true,
        min: 0, // Leeftijd moet positief zijn
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\+32 \d{3} \d{2} \d{2} \d{2}$/.test(value); // Valideert telefoonnummerformaat
            },
            message: 'Phone number must follow the format +32 444 44 44 44',
        },
    },
});

module.exports = mongoose.model('User', UserSchema);
