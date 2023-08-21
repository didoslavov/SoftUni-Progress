const Cube = require('../models/Cube.js');

async function getAllCubes(query) {
    const name = query.search || '';
    const from = query.from || '';
    const to = query.to || '';

    const difficultyFilter = from && to ? { difficultyLevel: { $gte: from, $lte: to } } : {};

    const filter = {
        name: new RegExp(name, 'i'),
        ...difficultyFilter,
    };

    return await Cube.find(filter).lean();
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
