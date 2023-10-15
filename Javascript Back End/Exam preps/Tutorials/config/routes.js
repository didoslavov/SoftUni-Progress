const authController = require('../controllers/authController.js');
const courseController = require('../controllers/courseController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/courses', courseController);
};
