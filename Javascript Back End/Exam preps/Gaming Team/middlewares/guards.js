const { getGameById } = require('../services/gameService.js');

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
        const { gameId } = req.params;
        const userId = req.user._id;

        const game = await getGameById(gameId);

        if (req.user && userId === game.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/games/${gameId}/details`);
        }
    };
}

function canBuy() {
    return async (req, res, next) => {
        const { gameId } = req.params;
        const userId = req.user?._id;

        const game = await getGameById(gameId);

        if (req.user && userId !== game.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/games/${gameId}/details`);
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
