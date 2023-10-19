const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const defaultController = require('../controllers/defaultController.js');
const auctionController = require('../controllers/auctionController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/auctions', auctionController);
    app.use('*', defaultController);
};
