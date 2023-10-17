const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const defaultController = require('../controllers/defaultController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('*', defaultController);
};
