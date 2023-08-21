const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/cubicle';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log('Database connected...');
    } catch (err) {
        console.error('Error initializing databse');
        console.error(err.message);
        process.exit(1);
    }
};
