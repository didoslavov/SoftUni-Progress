const { hasUser, canBid, isOwner } = require('../middlewares/guards.js');
const {
    createAuction,
    getAllAuctions,
    getAuctionById,
    placeBid,
    closeAuction,
    getUserClosedAuctions,
    deleteAuction,
    editAuction,
} = require('../services/auctionService.js');
const { getSelectedOption } = require('../util/categoryOptions.js');
const { parseError } = require('../util/parser.js');

const auctionController = require('express').Router();

auctionController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

auctionController.post('/create', hasUser(), async (req, res) => {
    const { title, category, image, price, description } = req.body;

    try {
        if (!title || !category || !price) {
            throw new Error('Title, category and price are required!');
        }

        await createAuction({ title, category, image, price: Number(price), description, author: req.user._id });

        res.redirect('/auctions/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', user: req.user, errors, auction: { ...req.body } });
    }
});

auctionController.get('/catalog', async (req, res) => {
    try {
        const auctions = await getAllAuctions();

        res.render('browse', { title: 'Catalog Page', user: req.user, auctions });
    } catch (error) {
        const errors = parseError(error);

        res.render('browse', { title: 'Catalog Page', errors, user: req.user });
    }
});

auctionController.get('/:auctionId/details', async (req, res) => {
    const { auctionId } = req.params;
    const user = req.user;

    try {
        const auction = await getAuctionById(auctionId);
        const isOwner = auction.author?._id.toString() === user?._id;
        const isHigherBidder = auction.bidders[auction.bidders?.length - 1]?._id.toString() === user?._id;
        const higherBidder = auction.bidders[auction.bidders?.length - 1];

        isOwner
            ? res.render('details-owner', { title: 'Details Page', user, auction, higherBidder })
            : res.render('details', { title: 'Details Page', user, auction, isHigherBidder });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

auctionController.post('/:auctionId/bid', canBid(), async (req, res) => {
    const { auctionId } = req.params;
    const user = req.user;
    const { bid } = req.body;

    try {
        const updatedAuction = await placeBid(auctionId, user._id, Number(bid));

        res.redirect(`/auctions/${auctionId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

auctionController.get('/closed-auctions', hasUser(), async (req, res) => {
    const user = req.user;
    try {
        const auctions = await getUserClosedAuctions(user._id);

        res.render('closed-auctions', { title: 'Closed Auctions', user, auctions });
    } catch (error) {
        const errors = parseError(error);

        res.render('closed-auctions', { title: 'Closed Auctions', user, errors });
    }
});

auctionController.get('/:auctionId/close', hasUser(), isOwner(), async (req, res) => {
    const { auctionId } = req.params;

    try {
        await closeAuction(auctionId);

        res.redirect(`/auctions/closed-auctions`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details-owner', { title: 'Details Page', user: req.user, errors });
    }
});

auctionController.get('/:auctionId/edit', hasUser(), isOwner(), async (req, res) => {
    const { auctionId } = req.params;

    try {
        const auction = await getAuctionById(auctionId);
        const categories = getSelectedOption(auction.category);

        res.render('edit', { title: 'Edit Page', user: req.user, auction, categories });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', user: req.user, errors, auction: { ...req.body } });
    }
});

auctionController.post('/:auctionId/edit', hasUser(), isOwner(), async (req, res) => {
    const { auctionId } = req.params;
    const { title, category, image, price, description } = req.body;

    try {
        if (!title || !category || !price) {
            throw new Error('Title, category and price are required!');
        }

        await editAuction(auctionId, { title, category, image, price: Number(price), description });

        res.redirect(`/auctions/${auctionId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', user: req.user, errors, auction: { ...req.body } });
    }
});

auctionController.get('/:auctionId/delete', hasUser(), isOwner(), async (req, res) => {
    const { auctionId } = req.params;

    try {
        await deleteAuction(auctionId);

        res.redirect('/auctions/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('details-owner', { title: 'Details Page', user: req.user, errors });
    }
});

module.exports = auctionController;
