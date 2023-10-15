const Animal = require('../models/Animal');

async function getAllAnimals() {
    return Animal.find().lean();
}

async function getAnimalById(animalId) {
    return Animal.findById(animalId).lean();
}

async function getLastCreatedAnimals() {
    return Animal.find().sort({ _id: -1 }).limit(3).lean();
}

async function createAnimal(animal) {
    return Animal.create(animal);
}

async function updateAnimal(animalId, animal) {
    await Animal.findByIdAndUpdate(animalId, animal);
}

async function deleteAnimal(animalId) {
    await Animal.findByIdAndDelete(animalId);
}

async function searchAnimalByLocation(query) {
    return Animal.find({ location: { $regex: new RegExp(query, 'i') } }).lean();
}

async function donate(animalId, userId) {
    await Animal.findOneAndUpdate(
        { _id: animalId, donations: { $ne: userId } },
        {
            $push: { donations: userId },
        }
    );
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    getLastCreatedAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    searchAnimalByLocation,
    donate,
};
