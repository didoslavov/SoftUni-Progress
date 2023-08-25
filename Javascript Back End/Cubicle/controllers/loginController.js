const loginController = require('express').Router();
const { login } = require('../services/authService.js');

loginController.get('/', async (req, res) => {
    res.render('login');
});

loginController.post('/', async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        const token = req.signJwt(result);

        res.cookie('jwt', token, { maxAge: 14400000 });
        res.redirect('/');
    } catch (error) {
        res.redirect('/login');
    }
});

module.exports = loginController;
