const authController = require('../controllers/authController.js');
const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');
const postsController = require('../controllers/postsController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/posts', postsController);
    app.use('*', defaultController);
};
