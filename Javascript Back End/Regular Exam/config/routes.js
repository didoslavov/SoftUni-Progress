const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const defaultController = require('../controllers/defaultController.js');
const electronicController = require('../controllers/electronicController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/electronics', electronicController);
    app.use('*', defaultController);
};
