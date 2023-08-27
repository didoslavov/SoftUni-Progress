const { getUnattachedAccessories } = require('../services/accessoryService.js');
const { getCubeById, attachAccessory } = require('../services/cubeService.js');

const attachAccessoryController = require('express').Router();

attachAccessoryController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);
    const unattachedAccessories = await getUnattachedAccessories(cube);

    try {
        if (!req.user || cube.ownerId != req.user._id) {
            throw new Error("You're not creator of this cube!");
        }

        res.render('attachAccessory', { cube, unattachedAccessories, title: 'Attach Accessory' });
    } catch (error) {
        res.render('details', {
            cube,
            unattachedAccessories,
            title: 'Details',
            error: error.message.split(','),
        });
    }
});

attachAccessoryController.post('/:id', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;
    const cube = await getCubeById(cubeId);
    const unattachedAccessories = await getUnattachedAccessories(cube);

    try {
        if (!req.user || cube.ownerId != req.user._id) {
            throw new Error("You're not creator of this cube!");
        }

        await attachAccessory(cubeId, accessoryId);

        res.redirect('/details/' + cubeId);
    } catch (error) {
        res.render('details', {
            cube,
            unattachedAccessories,
            title: 'Attach Accessory',
            error: error.message.split(','),
        });
    }
});

module.exports = attachAccessoryController;
