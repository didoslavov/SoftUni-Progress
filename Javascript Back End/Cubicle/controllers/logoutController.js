const logoutController = require('express').Router();

logoutController.get('/', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
});

module.exports = logoutController;
