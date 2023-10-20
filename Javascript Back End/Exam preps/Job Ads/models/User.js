const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

//TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, match: [emailRegex, 'Please fill a valid email address'] },
    hashedPassword: { type: String, required: true },
    skills: { type: String, required: true, maxLength: [40, 'Skill must be maximum 40 characters long.'] },
    ads: [{ type: ObjectId, ref: 'Ad' }],
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
