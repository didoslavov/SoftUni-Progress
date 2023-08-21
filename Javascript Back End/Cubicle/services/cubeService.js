const Cube = require('../models/Cube.js');

async function getAllCubes() {
    return await Cube.find({}).lean();
}

async function getCubeById(id) {
    return await Cube.findById(id).lean();
}

async function createCube(data) {
    const cube = {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: data.difficultyLevel,
    };

    const result = await Cube.create(cube);

    return result;
}

module.exports = {
    createCube,
    getAllCubes,
    getCubeById,
};
