const mongoose = require('mongoose');

//! change 'scaffooldDB' to whatever you need to be the name of the DB
const CONNECTION_STRING = 'mongodb://localhost:27017/friendlyWorld';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING);

        console.log('Database connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
