const aboutController = require('../controllers/aboutController.js');
const createController = require('../controllers/createController.js');
const defaultController = require('../controllers/defaultController.js');
const detailsController = require('../controllers/detailsController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);
    app.use('/create', createController);
    app.use('/about', aboutController);
    app.use('/:id', detailsController);

    app.use('*', defaultController);
};
