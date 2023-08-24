const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    res.render('delete');
});

module.exports = deleteController;
