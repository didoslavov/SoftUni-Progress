const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

//TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9]{5,}$/,
            '1Username or password should be at least 5 characters long and should consist only English letters and digits.',
        ],
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    courses: [{ type: ObjectId, ref: 'Course' }],
});

userSchema.index(
    { username: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
