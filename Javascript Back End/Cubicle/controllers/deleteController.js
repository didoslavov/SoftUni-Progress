const deleteController = require('express').Router();

deleteController.get('/', async (req, res) => {
    res.render('delete');
});

module.exports = deleteController;
