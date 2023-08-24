const { createAccessory } = require('../services/accessoryService.js');

const createAccessoryController = require('express').Router();

createAccessoryController.get('/', (req, res) => {
    res.render('createAccessory');
});

createAccessoryController.post('/', async (req, res) => {
    try {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: Number(req.body.difficultyLevel),
        };

        await createAccessory(accessory);

        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.redirect('/create-accessory');
    }
});

module.exports = createAccessoryController;
