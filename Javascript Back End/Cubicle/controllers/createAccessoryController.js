const { createAccessory } = require('../services/accessoryService.js');

const createAccessoryController = require('express').Router();

createAccessoryController.get('/', (req, res) => {
    res.render('createAccessory', {
        title: 'Add Accessory',
    });
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
        res.render('createAccessory', {
            title: 'Add Accessory',
            error: error.message.split(','),
        });
    }
});

module.exports = createAccessoryController;
