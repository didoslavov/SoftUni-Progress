const { createCube } = require('../services/cubeService.js');

const createCubeController = require('express').Router();

createCubeController.get('/', (req, res) => {
    res.render('createCube');
});

createCubeController.post('/', async (req, res) => {
    try {
        await createCube(req.body);

        res.redirect('/');
    } catch (error) {
        console.error(error.massege);
    }
});

module.exports = createCubeController;
