const aboutController = require('../controllers/aboutController.js');
const attachAccessoryController = require('../controllers/attachAccessoryController.js');
const createAccessoryController = require('../controllers/createAccessoryController.js');
const createCubeController = require('../controllers/createCubeController.js');
const defaultController = require('../controllers/defaultController.js');
const deleteController = require('../controllers/deleteController.js');
const detailsController = require('../controllers/detailsController.js');
const editController = require('../controllers/editController.js');
const homeController = require('../controllers/homeController.js');
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');

module.exports = (app) => {
    app.use(homeController);

    app.use('/create', createCubeController);
    app.use('/create-accessory', createAccessoryController);
    app.use('/attach-accessory', attachAccessoryController);
    app.use('/about', aboutController);
    app.use('/details/', detailsController);
    app.use('/register', registerController);
    app.use('/login', loginController);
    app.use('/delete/', deleteController);
    app.use('/edit/', editController);

    app.use('*', defaultController);
};
