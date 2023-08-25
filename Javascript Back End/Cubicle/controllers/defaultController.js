const defaultController = require('express').Router();

defaultController.get('*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
    });
});

module.exports = defaultController;
