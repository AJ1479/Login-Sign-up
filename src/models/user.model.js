const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requiured: true,
        unique: true,
    },
    email: {
        type: String,
        requiured: true,
        unique: true,
    },
    password: {
        type: String,
        requiured: true,
    },
});

module.exports = mongoose.model('User', userSchema);
