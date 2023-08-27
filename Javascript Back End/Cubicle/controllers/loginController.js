const loginController = require('express').Router();
const { login } = require('../services/authService.js');

loginController.get('/', async (req, res) => {
    res.render('login', {
        title: 'Login',
    });
});

loginController.post('/', async (req, res) => {
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    try {
        if (username == '' || password == '') {
            throw new Error('All fields are required!');
        }

        const result = await login(username, password);
        const token = req.signJwt(result);

        res.cookie('jwt', token, { maxAge: 14400000 });
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.render('login', {
            title: 'Login',
            error: error.message.split('\n'),
        });
    }
});

module.exports = loginController;
