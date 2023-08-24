const { getAccessories } = require('../services/accessoryService.js');
const { getCubeById } = require('../services/cubeService.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const id = req.params.id;

    const [cube, accessories] = await Promise.all([getCubeById(id), getAccessories()]);

    res.render('details', { cube, accessories });
});

module.exports = detailsController;
