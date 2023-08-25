const express = require('express');
const hbs = require('express-handlebars').create({ extname: '.hbs' });

const defaultTitle = require('../middlewares/defaultTitle');
const userNav = require('../middlewares/userNav');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/authMiddleware');

const jwtSecret = 'myjwtsecrephrase';

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('static'));
    app.use(cookieParser());
    app.use(auth(jwtSecret));
    app.use(userNav());

    app.use(defaultTitle('Cubicle'));
};
