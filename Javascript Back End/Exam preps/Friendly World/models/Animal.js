const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const animalSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    years: {
        type: Number,
        required: true,
        min: [1, 'Years must be between 1 and 100'],
        max: [100, 'Years must be between 1 and 100'],
    },
    kind: { type: String, required: true, minLength: [3, 'Kind must be min 3 chars long'] },
    image: {
        type: String,
        required: true,
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
    },
    need: {
        type: String,
        required: true,
        minLength: [3, 'Need must be min 3 chars long'],
        maxLength: [20, 'Need must be max 20 chars long'],
    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'Location must be min 5 chars long'],
        maxLength: [15, 'Location must be max 15 chars long'],
    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'Name must be min 5 chars long'],
        maxLength: [50, 'Location must be max 50 chars long'],
    },
    donations: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

animalSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Animal = model('Animal', animalSchema);

module.exports = Animal;
