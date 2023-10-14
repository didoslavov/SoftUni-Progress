const defaultController = require('express').Router();

defaultController.get('/', (req, res) => {
    res.render('404', { user: req.user });
});

module.exports = defaultController;
