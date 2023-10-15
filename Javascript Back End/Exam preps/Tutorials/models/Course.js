const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const courseSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: {
        type: String,
        required: true,
        default: new Date(Date.now()).toString().slice(0, 24),
    },
    enrolled: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

courseSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en-us',
            strength: 2,
        },
    }
);

const Course = model('Course', courseSchema);

module.exports = Course;
