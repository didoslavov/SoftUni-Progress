const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    res.render('details');
});

module.exports = detailsController;
