const animalsController = require('../controllers/animalsController.js');
const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/animals', animalsController);
    app.use('*', (req, res) => res.render('404', { title: 'Default Page', user: req.user }));
};
