const { getAttachedAccessories } = require('../services/accessoryService.js');
const { getCubeById, deleteCube } = require('../services/cubeService.js');
const { getSelectedOption } = require('./utils/utils.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);
    const options = getSelectedOption(cube.difficultyLevel);
    const attachedAccessories = await getAttachedAccessories(cube);

    if (!req.user || cube.ownerId != req.user._id) {
        return res.render('details', {
            cube,
            attachedAccessories,
            title: 'Details',
            error: "You're not creator of this cube!",
        });
    }

    res.render('delete', {
        title: 'Delete',
        cube,
        options,
    });
});

deleteController.post('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);
    const options = getSelectedOption(cube.difficultyLevel);
    const attachedAccessories = await getAttachedAccessories(cube);

    if (!req.user || cube.ownerId != req.user._id) {
        return res.render('details', {
            cube,
            attachedAccessories,
            title: 'Details',
            error: "You're not creator of this cube!",
        });
    }

    try {
        await deleteCube(id);
        res.redirect('/');
    } catch (error) {
        res.render('delete', {
            title: 'Delete',
            cube,
            options,
            error: error.message.split(','),
        });
    }
});

module.exports = deleteController;
