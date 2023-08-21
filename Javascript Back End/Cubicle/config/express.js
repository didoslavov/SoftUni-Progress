const express = require('express');
const hbs = require('express-handlebars').create({ extname: '.hbs' });

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.static('static'));
    app.use(express.urlencoded({ extended: true }));
};
