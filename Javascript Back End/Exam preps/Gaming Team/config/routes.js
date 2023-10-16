const authController = require('../controllers/authController.js');
const defaultController = require('../controllers/defaultController.js');
const gamesController = require('../controllers/gamesController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/games', gamesController);
    app.use('*', defaultController);
};
