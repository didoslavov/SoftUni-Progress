const homeController = require('../controllers/homeController');
const addBreedController = require('../controllers/addBreedController');
const createCatController = require('../controllers/createCatController');
const editCatController = require('../controllers/editCatController');
const shelterCatController = require('../controllers/shelterCatController');

module.exports = (app) => {
    app.use(homeController);
    app.use('/cats/add-breed', addBreedController);
    app.use('/cats/add-cat', createCatController);
    app.use('/cats/edit/', editCatController);
    app.use('/cats/shelter/', shelterCatController);
};
