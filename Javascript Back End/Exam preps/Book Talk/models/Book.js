const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: true, minLength: [2, 'Title must be at least 2 characters long.'] },
    author: { type: String, required: true, minLength: [5, 'Author must be at least 5 characters long.'] },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(https?:\/\/).*$/.test(v);
            },
            message: (props) =>
                `${props.value} is not a valid URL for an image. Please use a URL starting with http:// or https://.`,
        },
    },
    review: { type: String, required: true, minLength: [10, 'Review must be at least 10 characters long.'] },
    genre: { type: String, required: true, minLength: [3, 'Genre must be at least 3 characters long.'] },
    stars: { type: Number, required: true, min: [1, 'Stars must be min 1'], max: [5, 'Stars must be max 5'] },
    wishList: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

bookSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en-US',
            strength: 2,
        },
    }
);

const Book = model('Book', bookSchema);

module.exports = Book;
