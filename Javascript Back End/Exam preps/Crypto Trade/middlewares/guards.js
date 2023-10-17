const { getCryptoById } = require('../services/cryptoService.js');

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
        const { cryptoId } = req.params;
        const userId = req.user._id;

        const crypto = await getCryptoById(cryptoId);

        if (req.user && userId === crypto.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/crypto/${cryptoId}/details`);
        }
    };
}

function canBuy() {
    return async (req, res, next) => {
        const { cryptoId } = req.params;
        const userId = req.user?._id;

        const crypto = await getCryptoById(cryptoId);

        if (req.user && userId !== crypto.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/crypto/${cryptoId}/details`);
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
    canBuy,
};
