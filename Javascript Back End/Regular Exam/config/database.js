const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/electronics';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING);

        console.log('Database connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
