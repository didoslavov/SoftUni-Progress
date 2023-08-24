const loginController = require('express').Router();

loginController.get('/', async (req, res) => {
    res.render('login');
});

module.exports = loginController;
