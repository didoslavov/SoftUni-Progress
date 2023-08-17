const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: String,
    description: String,
    breed: String,
    image: String,
});

const Cat = model('Cat', catSchema);

module.exports = Cat;
