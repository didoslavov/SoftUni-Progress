const aboutController = require('../controllers/aboutController.js');
const createController = require('../controllers/createController.js');
const defaultController = require('../controllers/defaultController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);
    app.use('/create', createController);
    app.use('/about', aboutController);

    app.use('*', defaultController);
};
