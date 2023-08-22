const createAccessoryController = require('express').Router();

createAccessoryController.get('/', (req, res) => {
    res.render('createAccessory');
});

module.exports = createAccessoryController;
