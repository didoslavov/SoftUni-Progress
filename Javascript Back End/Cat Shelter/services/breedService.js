const Breed = require('../models/Breed');

async function getAllBreeds() {
    return Breed.find({}).lean();
}

async function createBreed(data) {
    const breed = {
        breed: data.breed,
    };

    const result = await Breed.create(breed);

    return result;
}

module.exports = {
    getAllBreeds,
    createBreed,
};
