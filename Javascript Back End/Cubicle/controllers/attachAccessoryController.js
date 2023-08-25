const { getUnattachedAccessories } = require('../services/accessoryService.js');
const { getCubeById, attachAccessory } = require('../services/cubeService.js');

const attachAccessoryController = require('express').Router();

attachAccessoryController.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const cube = await getCubeById(id);

        const unattachedAccessories = await getUnattachedAccessories(cube);

        res.render('attachAccessory', { cube, unattachedAccessories, title: 'Attach Accessory' });
    } catch (error) {
        res.redirect('404');
    }
});

attachAccessoryController.post('/:id', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    try {
        await attachAccessory(cubeId, accessoryId);

        res.redirect('/details/' + cubeId);
    } catch (error) {
        res.redirect('/attach-accessory/' + cubeId);
    }
});

module.exports = attachAccessoryController;
