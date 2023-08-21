const createController = require('../controllers/createController.js');
const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);
    app.use(createController);

    app.use('*', defaultController);
};
