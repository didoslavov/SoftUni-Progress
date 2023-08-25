const aboutController = require('express').Router();

aboutController.get('/', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

module.exports = aboutController;
