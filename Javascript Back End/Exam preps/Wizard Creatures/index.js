const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routeConfig = require('./config/routes');

const PORT = 3000;

start();

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routeConfig(app);

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
}
