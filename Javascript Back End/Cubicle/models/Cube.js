const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');
const { maxLength, validateImageUrl } = require('./validators');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: maxLength },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    imageUrl: {
        type: String,
        required: true,
        validate: { validator: validateImageUrl, message: 'You need to provide valid url!' },
    },
    accessories: { type: [ObjectId], default: [], ref: 'Accessory' },
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
