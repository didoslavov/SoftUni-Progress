const { getCubeById } = require('../services/cubeService.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);

    res.render('details', { cube });
});

module.exports = detailsController;
