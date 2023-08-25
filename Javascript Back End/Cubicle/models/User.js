const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
});
