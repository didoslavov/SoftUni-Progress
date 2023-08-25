const { register } = require('../services/authService.js');

const registerController = require('express').Router();

registerController.get('/', async (req, res) => {
    res.render('register');
});

registerController.post('/', async (req, res) => {
    const username = req.body.username.trim();
    const password = req.body.password.trim();
    const rePass = req.body.repeatPassword.trim();

    try {
        if (username == '' || password == '') {
            throw new Error('All fields are required!');
        }

        if (password != rePass) {
            throw new Error("Passwords don't match!");
        }

        const result = await register(username, password);
        const token = req.signJwt(result);

        res.cookie('jwt', token, { maxAge: 14400000 });
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.redirect('/register');
    }
});

module.exports = registerController;
