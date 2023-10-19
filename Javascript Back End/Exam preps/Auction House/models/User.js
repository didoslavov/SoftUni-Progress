const { Schema, model } = require('mongoose');

const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

//TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, match: [emailRegex, 'Please fill a valid email address'] },
    firstName: { type: String, required: true, minLength: [1, 'First Name must be atleast 1 characters long.'] },
    lastName: { type: String, required: true, minLength: [1, 'Last Name must be atleast 1 characters long.'] },
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
