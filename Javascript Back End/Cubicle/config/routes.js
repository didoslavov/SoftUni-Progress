const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use(homeController);
};
