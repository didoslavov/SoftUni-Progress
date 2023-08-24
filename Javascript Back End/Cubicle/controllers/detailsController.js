const { getAccessories, getAttachedAccessories } = require('../services/accessoryService.js');
const { getCubeById } = require('../services/cubeService.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const id = req.params.id;

    const cube = await getCubeById(id);

    const attachedAccessories = await getAttachedAccessories(cube);

    res.render('details', { cube, attachedAccessories });
});

module.exports = detailsController;
