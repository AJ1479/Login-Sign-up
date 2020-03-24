const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailid: {
        type: Number,
        required: true,
        unique: true,

    },

});

module.exports = mongoose.model('Users', choiceSchema);
