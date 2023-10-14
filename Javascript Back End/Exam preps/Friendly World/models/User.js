const { Schema, model } = require('mongoose');

//TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, minLength: [10, 'Username must be atleast 10 characters long.'] },
    hashedPassword: { type: String, required: true },
});

userSchema.index(
    { email: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
