const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    res.render('edit', {
        title: 'Edit',
    });
});

module.exports = editController;
