const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: String,
    description: String,
    level: Number,
    image: String,
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
