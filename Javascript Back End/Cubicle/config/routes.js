const aboutController = require('../controllers/aboutController.js');
const createAccessoryController = require('../controllers/createAccessoryController.js');
const createCubeController = require('../controllers/createCubeController.js');
const defaultController = require('../controllers/defaultController.js');
const detailsController = require('../controllers/detailsController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);

    app.use('/create/accessory', createAccessoryController);
    app.use('/create', createCubeController);
    app.use('/about', aboutController);
    app.use('/:id', detailsController);

    app.use('*', defaultController);
};
