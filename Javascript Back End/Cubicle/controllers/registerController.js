const registerController = require('express').Router();

registerController.get('/', async (req, res) => {
    res.render('register');
});

module.exports = registerController;
