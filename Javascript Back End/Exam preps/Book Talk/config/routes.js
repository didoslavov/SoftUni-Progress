const authController = require('../controllers/authController.js');
const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');
const reviewController = require('../controllers/reviewController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/reviews', reviewController);
    app.use('*', defaultController);
};
