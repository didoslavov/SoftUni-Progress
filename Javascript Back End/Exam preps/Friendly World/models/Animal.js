const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const animalSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    years: { type: Number, required: true, minLength: [3, 'Name must be min 3 chars long'] },
    kind: { type: String, required: true, minLength: [3, 'Name must be min 3 chars long'] },
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
    need: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    location: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    description: { type: String, required: true, minLength: [2, 'Name must be min 2 chars long'] },
    donations: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});
