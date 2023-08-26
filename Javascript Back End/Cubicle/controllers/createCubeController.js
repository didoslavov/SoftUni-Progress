const { isGuest } = require('../middlewares/guards.js');
const { createCube } = require('../services/cubeService.js');

const createCubeController = require('express').Router();

createCubeController.get('/', (req, res) => {
    res.render('createCube', {
        title: 'Add a Cube',
    });
});

createCubeController.post('/', async (req, res) => {
    try {
        const cube = req.body;
        const ownerId = req.user._id;

        await createCube(cube, ownerId);

        res.redirect('/');
    } catch (error) {
        console.error(error.massege);
    }
});

module.exports = createCubeController;
