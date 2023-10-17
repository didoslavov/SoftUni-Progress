const { hasUser, isOwner, canWish } = require('../middlewares/guards.js');
const {
    createReview,
    getAllReviews,
    getReviewById,
    wishBook,
    deleteReview,
    editReview,
    getUserReviews,
} = require('../services/reviewService.js');
const { parseError } = require('../util/parser.js');

const reviewController = require('express').Router();

reviewController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

reviewController.post('/create', hasUser(), async (req, res) => {
    const { title, author, genre, stars, image, review } = req.body;

    try {
        if (!title || !author || !genre || !stars || !image || !review) {
            throw new Error('All fields are required!');
        }

        await createReview({ title, author, genre, stars: Number(stars), image, review, owner: req.user._id });

        res.redirect('/reviews/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', errors, user: req.user, review: { ...req.body } });
    }
});

reviewController.get('/catalog', async (req, res) => {
    try {
        const reviews = await getAllReviews();

        res.render('catalog', { title: 'Catalog Page', user: req.user, reviews });
    } catch (error) {
        const errors = parseError(error);

        res.render('catalog', { title: 'Catalog Page', errors, user: req.user });
    }
});

reviewController.get('/profile', hasUser(), async (req, res) => {
    const user = req.user;

    try {
        const reviews = await getUserReviews(user._id);

        res.render('profile', { title: 'Profile Page', user, reviews });
    } catch (error) {
        const errors = parseError(error);

        res.render('/reviews/profile', { title: 'Profile Page', errors, user });
    }
});

reviewController.get('/:reviewId/details', async (req, res) => {
    const { reviewId } = req.params;
    const user = req.user;

    try {
        const review = await getReviewById(reviewId);
        const isOwner = user?._id === review.owner._id.toString();
        const hasWished = review.wishList.some((w) => w.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, review, isOwner, hasWished });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors, user: req.user });
    }
});

reviewController.get('/:reviewId/edit', hasUser(), isOwner(), async (req, res) => {
    const { reviewId } = req.params;

    try {
        const review = await getReviewById(reviewId);

        res.render('edit', { title: 'Edit Page', user: req.user, review });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, user: req.user, review: { ...req.body } });
    }
});

reviewController.post('/:reviewId/edit', hasUser(), isOwner(), async (req, res) => {
    const { reviewId } = req.params;
    const { title, author, genre, stars, image, review } = req.body;

    try {
        if (!title || !author || !genre || !stars || !image || !review) {
            throw new Error('All fields are required!');
        }

        await editReview(reviewId, { title, author, genre, stars: Number(stars), image, review });

        res.redirect(`/reviews/${reviewId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, user: req.user, review: { ...req.body } });
    }
});

reviewController.get('/:reviewId/delete', hasUser(), isOwner(), async (req, res) => {
    const { reviewId } = req.params;

    try {
        deleteReview(reviewId);

        res.redirect(`/reviews/catalog`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors, user: req.user });
    }
});

reviewController.get('/:reviewId/wish', hasUser(), canWish(), async (req, res) => {
    const { reviewId } = req.params;
    const userId = req.user._id;

    try {
        wishBook(reviewId, userId);

        res.redirect(`/reviews/${reviewId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors, user: req.user });
    }
});

module.exports = reviewController;
