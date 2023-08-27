const { getCubeById, editCube } = require('../services/cubeService.js');
const { getSelectedOption } = require('./utils/utils.js');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);

    const options = getSelectedOption(cube.difficultyLevel);

    try {
        if (!req.user || cube.ownerId != req.user._id) {
            throw new Error("You're not creator of this cube!");
        }

        res.render('edit', {
            id,
            options,
            cube,
            title: 'Edit',
        });
    } catch (error) {
        res.render('details', {
            id,
            options,
            cube,
            title: 'Details',
            error: error.message.split(','),
        });
    }
});

editController.post('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = req.body;
    const options = getSelectedOption(cube.difficultyLevel);

    try {
        if (!req.user || cube.ownerId != req.user._id) {
            throw new Error("You're not creator of this cube!");
        }

        await editCube(id, cube);
        res.redirect('/details/' + id);
    } catch (error) {
        res.render('edit', {
            id,
            options,
            cube,
            title: 'Edit',
            error: error.message.split(','),
        });
    }
});

module.exports = editController;
