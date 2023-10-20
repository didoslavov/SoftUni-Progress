const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const adSchema = new Schema({
    title: { type: String, required: true, minLength: [4, 'Title must be at least 4 characters long.'] },
    location: { type: String, required: true, minLength: [8, 'Location must be at least 8 characters long.'] },
    company: { type: String, required: true, minLength: [3, 'Company must be at least 3 characters long.'] },
    description: { type: String, required: true, maxLength: [40, 'Description must be max 40 characters long.'] },
    owner: { type: ObjectId, ref: 'User' },
    applicants: [{ type: ObjectId, ref: 'User' }],
});

adSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en-US',
            strength: 2,
        },
    }
);

const Ad = model('Ad', adSchema);

module.exports = Ad;
