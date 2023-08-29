const { body, validationResult } = require('express-validator');
const { register } = require('../services/authService.js');

const registerController = require('express').Router();

registerController.get('/', async (req, res) => {
    res.render('register', {
        title: 'Register',
    });
});

registerController.post(
    '/',
    body('username').trim().notEmpty().withMessage('Username is required!'),
    body('password').trim().notEmpty().withMessage('Password is required!'),
    body('repeatPassword')
        .trim()
        .custom((v, { req }) => {
            if (v != req.body.password) {
                throw new Error("Passwords don't match!");
            }
        })
        .withMessage("Passwords don't match!"),
    async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw errors;
            }

            const result = await register(username, password);
            const token = req.signJwt(result);

            res.cookie('jwt', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.render('register', {
                title: 'Register',
                error: error.map((e) => e.msg),
            });
        }
    }
);

module.exports = registerController;
