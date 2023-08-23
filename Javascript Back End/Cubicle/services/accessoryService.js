const Accessory = require('../models/Accessory.js');

async function createAccessory(accessory) {
    await Accessory.create(accessory);
}

module.exports = {
    createAccessory,
};
