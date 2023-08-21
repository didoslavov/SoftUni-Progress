const createController = require('express').Router();

createController.get('/create', async (req, res) => {
    res.render('create');
});

module.exports = createController;
