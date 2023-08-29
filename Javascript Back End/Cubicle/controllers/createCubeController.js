const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards.js');
const { createCube } = require('../services/cubeService.js');

const createCubeController = require('express').Router();

createCubeController.get('/', (req, res) => {
    res.render('createCube', {
        title: 'Add a Cube',
    });
});

createCubeController.post(
    '/',
    body('name').trim().notEmpty().withMessage('Name is required!'),
    body('description').trim().notEmpty().withMessage('Description is required!'),
    body('imageUrl').trim().notEmpty().withMessage('Type valid image url!'),
    async (req, res) => {
        try {
            const cube = req.body;
            const ownerId = req.user._id;
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            await createCube(cube, ownerId);

            res.redirect('/');
        } catch (error) {
            err = error.errors ? error.errors.imageUrl.properties.message : error.map((e) => e.msg);
            res.render('createCube', {
                title: 'Add a Cube',
                cube: req.body,
                error: error.errors ? [error.errors.imageUrl.properties.message] : error.map((e) => e.msg),
            });
        }
    }
);

module.exports = createCubeController;
