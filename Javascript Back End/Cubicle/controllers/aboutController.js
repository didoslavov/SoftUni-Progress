const aboutController = require('express').Router();

aboutController.get('/', (req, res) => {
    res.render('about');
});

module.exports = aboutController;
