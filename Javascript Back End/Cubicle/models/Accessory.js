const { Schema, model } = require('mongoose');
const { maxLength, validateImageUrl } = require('./validators');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imageUrl: {
        type: String,
        required: true,
        validate: { validator: validateImageUrl, message: 'You need to provide valid url!' },
    },
    description: { type: String, required: true, maxLength: maxLength },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;
