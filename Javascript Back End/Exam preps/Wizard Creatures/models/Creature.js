const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const creatureSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    species: { type: String, required: true, minLength: [3, 'Species must be min 3 chars long'] },
    skinColor: { type: String, required: true, minLength: [3, 'Skin color must be min 3 chars long'] },
    eyeColor: { type: String, required: true, minLength: [3, 'Eye color must be min 3 chars long'] },
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
    description: {
        type: String,
        required: true,
        minLength: [5, 'Description must be min 5 chars long'],
        maxLength: [500, 'Description must be min 500 chars long'],
    },
    votes: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

creatureSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Creature = model('Creature', creatureSchema);

module.exports = Creature;
