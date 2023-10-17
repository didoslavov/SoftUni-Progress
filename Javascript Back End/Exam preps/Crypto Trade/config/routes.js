const authController = require('../controllers/authController.js');
const cryptoController = require('../controllers/cryptoController.js');
const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/crypto', cryptoController);
    app.use('*', defaultController);
};
