const { Schema, model } = require('mongoose');

const breedSchema = new Schema({
    breed: String,
});

const Breed = model('Breed', breedSchema);

module.exports = Breed;
