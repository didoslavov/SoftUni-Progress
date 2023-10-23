const { isGuest, hasUser } = require('../middlewares/guards.js');
const { register, login } = require('../services/userService.js');
const { parseError } = require('../util/parser.js');

const authController = require('express').Router();

authController.get('/register', isGuest(), (req, res) => {
    //TODO: replace with actual view by assignment
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post('/register', isGuest(), async (req, res) => {
    const { username, email, password, rePass } = req.body;

    try {
        if (!username || !email || !password) {
            throw new Error('All fields are required!');
        }

        if (password.length < 4) {
            throw new Error('Password must be at least 4 characters long.');
        }

        if (password !== rePass) {
            throw new Error("Passwords don't match!");
        }

        const token = await register(username, email, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        //TODO: Add error display to actual template from assignment
        res.render('register', {
            titile: 'Register Page',
            errors,
            body: {
                email,
            },
        });
    }
});

authController.get('/login', isGuest(), (req, res) => {
    //TODO: replace with actual view by assignment
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login', isGuest(), async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields are required!');
        }

        const token = await login(email, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        //TODO: Add error display to actual template from assignment
        res.render('login', {
            titile: 'Login Page',
            errors,
            body: {
                email,
            },
        });
    }
});

authController.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
