const Accessory = require('../models/Accessory.js');

function mapToViewModel(accessory) {
    return {
        id: accessory._id,
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
    };
}

async function createAccessory(accessory) {
    const data = await Accessory.create(accessory);

    return data.map(mapToViewModel);
}

async function getAccessories() {
    const data = await Accessory.find({});

    return data.map(mapToViewModel);
}

async function getUnattachedAccessories(cube) {
    const accessories = await getAccessories();

    const cubeAccessories = Array.from(cube.accessories).map((id) => id.toString());
    const unattachedAccessories = accessories.filter((a) => !cubeAccessories.includes(a.id.toString()));

    return unattachedAccessories;
}

async function getAttachedAccessories(cube) {
    const accessories = await getAccessories();

    const cubeAccessories = Array.from(cube.accessories).map((id) => id.toString());
    const attachedAccessories = accessories.filter((a) => cubeAccessories.includes(a.id.toString()));

    return attachedAccessories;
}

module.exports = {
    createAccessory,
    getAccessories,
    getUnattachedAccessories,
    getAttachedAccessories,
};
