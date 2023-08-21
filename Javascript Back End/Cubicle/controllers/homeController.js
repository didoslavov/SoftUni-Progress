const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    res.render('index');
});

module.exports = homeController;
