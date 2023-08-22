const Cube = require('../models/Cube.js');

async function getCubes(query) {
    const options = {};

    if (query.search) {
        options.name = new RegExp(query.search, 'i');
    }

    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) };
    }

    if (query.to) {
        if (!options.difficultyLevel) {
            options.difficultyLevel = {};
        }

        options.difficultyLevel.$lte = Number(query.to);
    }

    return await Cube.find(options).lean();
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
    getCubes,
    getCubeById,
};
