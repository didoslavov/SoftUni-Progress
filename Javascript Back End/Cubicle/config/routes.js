const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);

    app.use('*', defaultController);
};
