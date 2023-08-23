const { Schema, model } = require('mongoose');
const validateImageUrl = require('../util');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imageUrl: {
        type: String,
        required: true,
        validate: { validator: validateImageUrl, message: 'You need to provide valid url!' },
    },
    description: { type: String, required: true, maxLength: [500, 'Description must be max 500 chars.'] },
    difficultyLevel: Number,
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;
