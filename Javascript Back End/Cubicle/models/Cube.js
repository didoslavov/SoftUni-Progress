const { Schema, model } = require('mongoose');

const validateImageUrl = (url) => {
    const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
};

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    imageUrl: {
        type: String,
        required: true,
        validate: { validator: validateImageUrl, message: 'You need to provide valid url!' },
    },
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
