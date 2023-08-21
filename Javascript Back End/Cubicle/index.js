const env = process.env.NODE_ENV || 'development';
const portConfig = require('./config/config')[env];

const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database');

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(portConfig, () => console.log('Server listening on port 3000'));
}

start();
