const { createCube } = require('../services/cubeService.js');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', async (req, res) => {
    try {
        await createCube(req.body);

        res.redirect('/');
    } catch (error) {
        console.error(error.massege);
    }
});

module.exports = createController;
