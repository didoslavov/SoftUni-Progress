const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO: replace with actual view by assignment
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post('/register', async (req, res) => {
    const { username, password, rePass } = req.body;

    try {
        if (!username || !password) {
            throw new Error('All fields are required!');
        }

        if (password !== rePass) {
            throw new Error("Passwords don't match!");
        }

        const token = await register(username, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        //TODO: Add error display to actual template from assignment
        res.render('register', {
            titile: 'Register Page',
            errors,
            body: {
                username,
            },
        });
    }
});

authController.get('/login', (req, res) => {
    //TODO: replace with actual view by assignment
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            throw new Error('All fields are required!');
        }

        const token = await login(username, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        //TODO: Add error display to actual template from assignment
        res.render('login', {
            titile: 'Login Page',
            errors,
            body: {
                username,
            },
        });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
