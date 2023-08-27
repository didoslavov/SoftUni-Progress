const { getCubeById, editCube } = require('../services/cubeService.js');
const { getSelectedOption } = require('./utils/utils.js');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id);

    const options = getSelectedOption(cube.difficultyLevel);

    res.render('edit', {
        id,
        options,
        cube,
        title: 'Edit',
    });
});

editController.post('/:id', async (req, res) => {
    const id = req.params.id;
    const cube = req.body;
    const options = getSelectedOption(cube.difficultyLevel);

    try {
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
