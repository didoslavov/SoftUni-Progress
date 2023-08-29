const loginController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { login } = require('../services/authService.js');

loginController.get('/', async (req, res) => {
    res.render('login', {
        title: 'Login',
    });
});

loginController.post(
    '/',
    body('username').trim().notEmpty().withMessage('Username is required!'),
    body('password').trim().notEmpty().withMessage('Password is required!'),
    async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw errors;
            }

            const result = await login(username, password);
            const token = req.signJwt(result);

            res.cookie('jwt', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            res.render('login', {
                title: 'Login',
                error: error.map((e) => e.msg),
            });
        }
    }
);

module.exports = loginController;
