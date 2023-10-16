const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const gameSchema = new Schema({
    name: { type: String, required: true, minLength: [4, 'Name must be at least 4 characters long.'] },
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
    price: { type: Number, required: true, min: [0, 'Price must be a possitive number.'] },
    description: { type: String, required: true, minLength: [10, 'Description must be at least 10 characters long.'] },
    genre: { type: String, required: true, minLength: [2, 'Genre must be at least 2 characters long.'] },
    platform: {
        type: String,
        required: true,
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
    },
    boughtBy: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

gameSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en-US',
            strength: 2,
        },
    }
);

const Game = model('Game', gameSchema);

module.exports = Game;
