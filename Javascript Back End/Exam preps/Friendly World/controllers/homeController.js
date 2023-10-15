const { getLastCreatedAnimals } = require('../services/animalService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();

//TODO: Replace with real controller
homeController.get('/', async (req, res) => {
    try {
        const animals = await getLastCreatedAnimals();

        res.render('home', {
            title: 'Home Page',
            user: req.user,
            animals,
        });
    } catch (error) {
        const errors = parseError(error);

        res.render('home', { title: 'Home Page', errors });
    }
});

module.exports = homeController;
