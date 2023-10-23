const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true, minLength: [10, 'Name must be at least 10 characters long.'] },
    type: { type: String, required: true, minLength: [2, 'Type must be at least 2 characters long.'] },
    damage: { type: String, required: true, minLength: [10, 'Damages must be at least 10 characters long.'] },
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
        minLength: [10, 'Description must be at least 10 characters long.'],
        maxLength: [200, 'Description must be max 200 characters long.'],
    },
    production: {
        type: Number,
        required: true,
        min: [1900, 'Production must start from 1900.'],
        max: [2023, 'Production must be max 2023'],
    },
    exploitation: { type: Number, required: true, min: [0, 'Exploitation must be a possitive number!'] },
    price: { type: Number, required: true, min: [0, 'Price must be a possitive number!'] },
    boughtBy: [{ type: ObjectId, ref: 'User' }],
    owner: { type: ObjectId, ref: 'User' },
});

productSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en-US',
            strength: 2,
        },
    }
);

const Product = model('Product', productSchema);

module.exports = Product;
