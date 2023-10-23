const { getProductById } = require('../services/productService.js');

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
        const { productId } = req.params;
        const userId = req.user._id;

        const product = await getProductById(productId);

        if (req.user && userId === product.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/electronics/${productId}/details`);
        }
    };
}

function canBuy() {
    return async (req, res, next) => {
        const { productId } = req.params;
        const userId = req.user?._id;

        const product = await getProductById(productId);

        if (req.user && userId !== product.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/electronics/${productId}/details`);
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
