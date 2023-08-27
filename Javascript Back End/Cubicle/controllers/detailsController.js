const { getAttachedAccessories } = require('../services/accessoryService.js');
const { getCubeById } = require('../services/cubeService.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const id = req.params.id;

    const cube = await getCubeById(id);

    if (req.user && req.user._id == cube.ownerId?.toString()) {
        cube.isOwner = true;
    }

    const attachedAccessories = await getAttachedAccessories(cube);

    res.render('details', { cube, attachedAccessories, title: 'Details' });
});

module.exports = detailsController;
