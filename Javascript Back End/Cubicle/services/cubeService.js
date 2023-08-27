const Cube = require('../models/Cube.js');

function cubeViewModel(cube) {
    return {
        id: cube._id,
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficultyLevel: cube.difficultyLevel,
        accessories: cube.accessories,
        ownerId: cube.owner,
    };
}

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

    const cubes = await Cube.find(options);

    return cubes.map(cubeViewModel);
}

async function getCubeById(id) {
    const cube = await Cube.findById(id);

    if (!cube) {
        return undefined;
    }

    return cubeViewModel(cube);
}

async function createCube(data, ownerId) {
    const cube = {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: data.difficultyLevel,
        owner: ownerId,
    };

    const result = await Cube.create(cube);

    return result;
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);

    cube.accessories.push(accessoryId);
    await cube.save();
}

async function deleteCube(id) {
    await Cube.findByIdAndDelete(id);
}

async function editCube(id, data) {
    await Cube.findByIdAndUpdate(id, data);
}

module.exports = {
    createCube,
    getCubes,
    getCubeById,
    attachAccessory,
    editCube,
    deleteCube,
};
