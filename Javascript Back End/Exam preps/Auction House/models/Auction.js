const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const auctionSchema = new Schema({
    title: { type: String, required: true, minLength: [4, 'Title must be at least 4 characters long'] },
    category: { type: String, required: true, enum: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'] },
    description: { type: String, maxLength: [200, 'Description must be maximum 200 characters long.'] },
    image: { type: String },
    price: { type: Number, required: true, min: [0, 'Price must be a possitive number.'] },
    author: { type: ObjectId, ref: 'User', required: true },
    bidders: [{ type: ObjectId, ref: 'User' }],
    isClosed: { type: Boolean, default: false },
});

auctionSchema.index(
    { title: 1 },
    {
        collation: {
            locale: 'en-US',
            strength: 2,
        },
    }
);

const Auction = model('Auction', auctionSchema);

module.exports = Auction;
