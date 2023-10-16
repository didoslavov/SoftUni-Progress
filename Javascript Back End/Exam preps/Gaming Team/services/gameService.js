const Game = require('../models/Game.js');

async function getAllGames() {
    return Game.find().lean();
}

async function getGameById(gameId) {
    return Game.findById(gameId).lean();
}

async function createGame(game) {
    return Game.create(game);
}

async function editGame(gameId, game) {
    return Game.findOneAndUpdate({ _id: gameId }, game, { runValidators: true });
}

async function deleteGame(gameId) {
    await Game.findByIdAndDelete(gameId);
}

async function buyGame(gameId, userId) {
    await Game.findOneAndUpdate(
        {
            _id: gameId,
            boughtBy: {
                $ne: userId,
            },
        },
        { $push: { boughtBy: userId } }
    );
}

async function searchGame(search, platform) {
    if (!search || !platform) {
        return Game.find().lean();
    }
    return Game.find({
        name: {
            $regex: new RegExp(search, 'i'),
        },
        platform: platform,
    }).lean();
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    editGame,
    deleteGame,
    buyGame,
    searchGame,
};
