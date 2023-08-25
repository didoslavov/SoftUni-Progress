const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    res.render('edit');
});

module.exports = editController;
