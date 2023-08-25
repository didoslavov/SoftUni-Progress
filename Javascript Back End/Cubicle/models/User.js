const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
    username: { type: String, minLength: 3 },
    hashedPassword: { type: String, required: true },
});

const User = model('User', userSchema);

module.exports = User;
