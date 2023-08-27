const { getCubeById, deleteCube } = require('../services/cubeService.js');
const { getSelectedOption } = require('./utils/utils.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);
    const options = getSelectedOption(cube.difficultyLevel);

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
