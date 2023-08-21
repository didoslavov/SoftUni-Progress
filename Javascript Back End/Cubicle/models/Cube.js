const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: String,
    description: String,
    difficultyLevel: Number,
    imageUrl: String,
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
