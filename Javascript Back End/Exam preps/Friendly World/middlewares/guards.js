const { getAnimalById } = require('../services/animalService.js');

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
        const { animalId } = req.params;
        const userId = req.user._id;

        const animal = await getAnimalById(animalId);

        if (req.user && userId === animal.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/animals/${animalId}/details`);
        }
    };
}

function canDonate() {
    return async (req, res, next) => {
        const { animalId } = req.params;
        const userId = req.user?._id;

        const animal = await getAnimalById(animalId);

        if (req.user && userId !== animal.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/animals/${animalId}/details`);
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
    canDonate,
    hasUser,
    isGuest,
    isOwner,
};
