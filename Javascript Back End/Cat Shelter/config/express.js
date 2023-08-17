const express = require('express');
const hbs = require('express-handlebars').create({ extname: '.hbs' });
const path = require('path');

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.static('content'));
    app.use(express.urlencoded({ extended: true }));
};
