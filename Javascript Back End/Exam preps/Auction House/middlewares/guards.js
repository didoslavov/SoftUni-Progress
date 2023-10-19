const { getAuctionById } = require('../services/auctionService.js');

function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isOwner() {
    return async (req, res, next) => {
        const { auctionId } = req.params;
        const userId = req.user?._id;

        const auction = await getAuctionById(auctionId);
        if (req.user && userId === auction.author._id.toString()) {
            next();
        } else {
            res.redirect(`/auctions/${auctionId}/details`);
        }
    };
}

function canBid() {
    return async (req, res, next) => {
        const { auctionId } = req.params;
        const userId = req.user?._id;

        const auction = await getAuctionById(auctionId);

        if (req.user && userId !== auction.author._id.toString()) {
            next();
        } else {
            console.log('here');
            res.redirect(`/`);
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/'); //TODO: Check assignment for correct redirect
        } else {
            next();
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    isOwner,
    canBid,
};
