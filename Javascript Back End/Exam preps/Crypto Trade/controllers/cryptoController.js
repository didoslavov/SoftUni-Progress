const { hasUser, canBuy, isOwner } = require('../middlewares/guards.js');
const {
    createCrypto,
    getAllCrypto,
    getCryptoById,
    buyCrypto,
    deleteCrypto,
    editCrypto,
    searchCrypto,
} = require('../services/cryptoService.js');
const { parseError } = require('../util/parser.js');
const { getSelectedOption } = require('../util/paymentOptions.js');

const cryptoController = require('express').Router();

cryptoController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

cryptoController.post('/create', hasUser(), async (req, res) => {
    const { name, image, price, description, payment } = req.body;
    const user = req.user;

    try {
        if (!name || !image || !price || !description || !payment) {
            throw new Error('All fields are required!');
        }

        await createCrypto({ name, image, price: Number(price), description, payment, owner: user._id });

        res.redirect('/crypto/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', errors, user, coin: { ...req.body } });
    }
});

cryptoController.get('/catalog', async (req, res) => {
    try {
        const crypto = await getAllCrypto();

        res.render('catalog', { title: 'Catalog Page', user: req.user, crypto });
    } catch (error) {
        const errors = parseError(error);

        res.render('catalog', { title: 'Catalog Page', errors, user });
    }
});

cryptoController.get('/:cryptoId/details', async (req, res) => {
    const { cryptoId } = req.params;
    const user = req.user;

    try {
        const crypto = await getCryptoById(cryptoId);
        const isOwner = user?._id === crypto.owner.toString();
        const hasBought = crypto.boughtBy.some((b) => b.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, crypto, isOwner, hasBought });
    } catch (error) {
        const errors = parseError(error);

        res.render('catalog', { title: 'Details Page', errors, user });
    }
});

cryptoController.get('/:cryptoId/edit', hasUser(), isOwner(), async (req, res) => {
    const { cryptoId } = req.params;

    try {
        const crypto = await getCryptoById(cryptoId);
        const paymentMethods = getSelectedOption(crypto.payment);

        res.render('edit', { title: 'Edit page', user: res.user, crypto, paymentMethods });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, user: req.user });
    }
});

cryptoController.post('/:cryptoId/edit', hasUser(), isOwner(), async (req, res) => {
    const { name, image, price, description, payment } = req.body;
    const { cryptoId } = req.params;
    const paymentMethods = getSelectedOption(payment);

    try {
        if (!name || !image || !price || !description || !payment) {
            throw new Error('All fields are required!');
        }

        await editCrypto(cryptoId, { name, image, price: Number(price), description, payment });

        res.redirect(`/crypto/${cryptoId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, crypto: { _id: cryptoId, ...req.body }, paymentMethods });
    }
});

cryptoController.get('/:cryptoId/delete', hasUser(), isOwner(), (req, res) => {
    const { cryptoId } = req.params;

    try {
        deleteCrypto(cryptoId);

        res.redirect('/crypto/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors, user: req.user });
    }
});

cryptoController.get('/:cryptoId/buy', hasUser(), canBuy(), (req, res) => {
    const { cryptoId } = req.params;
    const userId = req.user._id;

    try {
        buyCrypto(cryptoId, userId);

        res.redirect(`/crypto/${cryptoId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors, user: req.user });
    }
});

cryptoController.get('/search', hasUser(), async (req, res) => {
    const { search, payment } = req.query;

    const crypto = await searchCrypto(search, payment);

    res.render('search', { title: 'Search Page', user: req.user, crypto });
});

module.exports = cryptoController;
