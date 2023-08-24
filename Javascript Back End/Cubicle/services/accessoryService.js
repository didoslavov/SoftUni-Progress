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

module.exports = {
    createAccessory,
    getAccessories,
};
