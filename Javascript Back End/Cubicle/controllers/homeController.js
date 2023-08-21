const { getAllCubes } = require('../services/cubeService.js');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const search = req.query;
    const cubes = await getAllCubes(search);

    res.render('index', { cubes });
});

module.exports = homeController;
