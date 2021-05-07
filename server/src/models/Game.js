const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    userId: {
        type: String,
        required: true
    }
}, { timestamps: false });

module.exports = model('Game', gameSchema);