const { getHomeAds } = require('../services/adService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();

//TODO: Replace with real controller
homeController.get('/', async (req, res) => {
    try {
        const ads = await getHomeAds();

        res.render('home', {
            title: 'Home Page',
            user: req.user,
            ads,
        });
    } catch (error) {
        const errors = parseError(error);

        res.render('home', { title: 'Home Page', user: req.user, errors });
    }
});

module.exports = homeController;
