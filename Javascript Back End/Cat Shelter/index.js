const express = require('express');
const hbr = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');

const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');
const createCatController = require('./controllers/createCatController');
const editCatController = require('./controllers/editCatController');
const shelterCatController = require('./controllers/shelterCatController');

const handlebars = hbr.create({ extname: '.hbs' });

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'content')));
app.use(favicon(path.join(__dirname, 'content/images', 'pawprint.ico'))); // not working, check it later!

app.use(homeController);
app.use('/cats/add-breed', addBreedController);
app.use('/cats/add-cat', createCatController);
app.use('/cats/edit/', editCatController);
app.use('/cats/shelter/:id', shelterCatController);

app.listen(3000);
