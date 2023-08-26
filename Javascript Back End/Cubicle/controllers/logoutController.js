const logoutController = require('express').Router();

logoutController.post('/', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
});

module.exports = logoutController;
