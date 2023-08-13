const express = require('express');
const { homeView } = require('./handlers/home.js');
const favicon = require('serve-favicon');
const path = require('path');
const { addBreedView } = require('./handlers/addBreed.js');
const { createCatView } = require('./handlers/createCat.js');
const { editCatView } = require('./handlers/editCat.js');
const { shelterCatView } = require('./handlers/shelterCat.js');

const app = express();
app.listen(3000);

app.use(express.static(path.join(__dirname, 'content')));
app.use(favicon(path.join(__dirname, 'content/images', 'pawprint.ico'))); // not working, check it later!

app.get('/', homeView);
app.get('/cats/add-breed', addBreedView);
app.get('/cats/add-cat', createCatView);
app.get('/cats/edit', editCatView);
app.get('/cats/shelter', shelterCatView);
