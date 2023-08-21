const defaultController = require('express').Router();

defaultController.get('*', (req, res) => {
    res.render('404');
});

module.exports = defaultController;
