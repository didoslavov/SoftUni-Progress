const { getReviewById } = require('../services/reviewService.js');

function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
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

function isOwner() {
    return async (req, res, next) => {
        const { reviewId } = req.params;
        const userId = req.user._id;

        const review = await getReviewById(reviewId);

        if (req.user && userId === review.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/reviews/${reviewId}/details`);
        }
    };
}

function canWish() {
    return async (req, res, next) => {
        const { reviewId } = req.params;
        const userId = req.user?._id;

        const review = await getReviewById(reviewId);

        if (req.user && userId !== review.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/reviews/${reviewId}/details`);
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    isOwner,
    canWish,
};
