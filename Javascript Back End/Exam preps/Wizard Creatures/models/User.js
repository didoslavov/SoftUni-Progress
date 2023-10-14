const { Schema, model } = require('mongoose');

//TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
    firstName: { type: String, required: true, minLength: [3, 'First name must be min 3 chars long'] },
    lastName: { type: String, required: true, minLength: [3, 'Last name must be min 3 chars long'] },
    email: { type: String, required: true, minLength: [10, 'Email must be min 10 chars long'] },
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
