const { hasUser, isOwner, canBuy } = require('../middlewares/guards.js');
const { createGame, getAllGames, getGameById, buyGame, deleteGame, editGame, searchGame } = require('../services/gameService.js');
const { parseError } = require('../util/parser.js');

const gamesController = require('express').Router();

gamesController.get('/catalog', async (req, res) => {
    try {
        const games = await getAllGames();

        res.render('catalog', { title: 'Catalog Page', user: req.user, games });
    } catch (error) {
        const errors = parseError(error);

        console.error(errors.join('\n'));
    }
});

gamesController.get('/:gameId/details', async (req, res) => {
    const { gameId } = req.params;
    const user = req.user;

    try {
        const game = await getGameById(gameId);
        const isOwner = user?._id === game.owner.toString();
        const hasBought = game.boughtBy.some((b) => b.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, game, isOwner, hasBought });
    } catch (error) {
        const errors = parseError(error);

        console.error(errors.join('\n'));
    }
});

gamesController.get('/:gameId/edit', hasUser(), isOwner(), async (req, res) => {
    const { gameId } = req.params;

    try {
        const game = await getGameById(gameId);

        res.render('edit', { title: 'Edit page', user: res.user, game });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, user: req.user });
    }
});

gamesController.post('/:gameId/edit', isOwner(), async (req, res) => {
    const { platform, name, image, price, genre, description } = req.body;
    const { gameId } = req.params;

    try {
        if (!platform || !name || !image || !price || !genre || !description) {
            throw new Error('All fields are required!');
        }

        await editGame(gameId, { platform, name, image, price: Number(price), genre, description });

        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, game: { ...req.body } });
    }
});

gamesController.get('/:gameId/delete', hasUser(), isOwner(), (req, res) => {
    const { gameId } = req.params;

    try {
        deleteGame(gameId);

        res.redirect('/games/catalog');
    } catch (error) {
        const errors = parseError(error);

        console.error(errors.join('\n'));
    }
});

gamesController.get('/:gameId/buy', hasUser(), canBuy(), (req, res) => {
    const { gameId } = req.params;
    const userId = req.user._id;

    try {
        buyGame(gameId, userId);

        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        const errors = parseError(error);

        console.error(errors.join('\n'));
    }
});

gamesController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

gamesController.post('/create', hasUser(), async (req, res) => {
    const { platform, name, image, price, genre, description } = req.body;

    try {
        if (!platform || !name || !image || !price || !genre || !description) {
            throw new Error('All fields are required!');
        }

        await createGame({ platform, name, image, price: Number(price), genre, description, owner: req.user._id });

        res.redirect('/games/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', errors, game: { ...req.body } });
    }
});

gamesController.get('/search', hasUser(), async (req, res) => {
    const { search, platform } = req.query;

    const games = await searchGame(search, platform);

    res.render('search', { title: 'Search Page', user: req.user, games });
});

module.exports = gamesController;
