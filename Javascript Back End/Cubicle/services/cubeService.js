const Cube = require('../models/Cube.js');

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
};
