const { getAdById } = require('../services/adService.js');

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
        const { adId } = req.params;
        const userId = req.user._id;

        const ad = await getAdById(adId);

        if (req.user && userId === ad.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/`);
        }
    };
}

function canApply() {
    return async (req, res, next) => {
        const { adId } = req.params;
        const userId = req.user?._id;

        const ad = await getAdById(adId);

        if (req.user && userId !== ad.owner._id.toString()) {
            next();
        } else {
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
    canApply,
};
