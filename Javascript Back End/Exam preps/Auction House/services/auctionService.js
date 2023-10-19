const Auction = require('../models/Auction.js');

async function createAuction(auction) {
    return Auction.create(auction);
}

async function getAllAuctions() {
    return Auction.find().lean();
}

async function getAuctionById(auctionId) {
    return Auction.findById(auctionId).populate(['author', 'bidders']).lean();
}

async function placeBid(auctionId, userId, bid) {
    return Auction.findOneAndUpdate(
        {
            _id: auctionId,
            author: { $ne: userId },
            bidders: { $ne: userId },
            price: { $lt: bid },
        },
        {
            $set: { price: bid },
            $push: { bidders: userId },
        },
        { new: true }
    );
}

async function closeAuction(auctionId) {
    await Auction.findOneAndUpdate({ _id: auctionId }, { isClosed: true });
}

async function getUserClosedAuctions(userId) {
    return Auction.find({ author: userId, isClosed: true }).lean();
}

async function deleteAuction(auctionId) {
    await Auction.findByIdAndDelete(auctionId);
}

async function editAuction(auctionId, auction) {
    await Auction.findOneAndUpdate({ _id: auctionId }, auction, { runValidators: true });
}

module.exports = {
    createAuction,
    getAllAuctions,
    getAuctionById,
    placeBid,
    closeAuction,
    getUserClosedAuctions,
    deleteAuction,
    editAuction,
};
