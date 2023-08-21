const createController = require('express').Router();

createController.get('/', async (req, res) => {
    res.render('create');
});

module.exports = createController;
