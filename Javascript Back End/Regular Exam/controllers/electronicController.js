const { hasUser, isOwner, canBuy } = require('../middlewares/guards.js');
const {
    createProduct,
    getAllProducts,
    searchProduct,
    getProductById,
    buyProduct,
    deleteProduct,
    editProduct,
} = require('../services/productService.js');
const { parseError } = require('../util/parser.js');
const electronicController = require('express').Router();

electronicController.get('/', async (req, res) => {
    try {
        const electronics = await getAllProducts();

        res.render('catalog', { title: 'Catalog Page', user: req.user, electronics });
    } catch (error) {
        const errors = parseError(error);

        res.render('catalog', { title: 'Catalog Page', user: req.user, errors });
    }
});

electronicController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

electronicController.post('/create', hasUser(), async (req, res) => {
    const { name, type, production, exploitation, damage, image, price, description } = req.body;
    const user = req.user;

    try {
        if (!name || !type || !production || !exploitation || !damage || !image || !price || !description) {
            throw new Error('All fields are required!');
        }

        await createProduct({
            name,
            type,
            production: Number(production),
            exploitation: Number(exploitation),
            damage,
            image,
            price: Number(price),
            description,
            owner: user._id,
        });

        res.redirect('/electronics');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Createe Page', user, errors, product: { ...req.body } });
    }
});

electronicController.get('/:productId/details', async (req, res) => {
    const { productId } = req.params;
    const user = req.user;
    let product = null;

    try {
        product = await getProductById(productId);
        const isOwner = user?._id === product.owner.toString();
        const hasBought = product.boughtBy.some((b) => b.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, product, isOwner, hasBought });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors, product });
    }
});

electronicController.get('/:productId/edit', hasUser(), isOwner(), async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await getProductById(productId);

        res.render('edit', { title: 'Edit Page', user: req.user, product });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', user: req.user, errors });
    }
});

electronicController.post('/:productId/edit', hasUser(), isOwner(), async (req, res) => {
    const { productId } = req.params;
    const { name, type, production, exploitation, damage, image, price, description } = req.body;
    const user = req.user;

    try {
        if (!name || !type || !production || !exploitation || !damage || !image || !price || !description) {
            throw new Error('All fields are required!');
        }

        await editProduct(productId, {
            name,
            type,
            production: Number(production),
            exploitation: Number(exploitation),
            damage,
            image,
            price: Number(price),
            description,
        });

        res.redirect(`/electronics/${productId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', user, errors, product: { _id: productId, ...req.body } });
    }
});

electronicController.get('/:productId/delete', hasUser(), isOwner(), async (req, res) => {
    const { productId } = req.params;

    try {
        await deleteProduct(productId);

        res.redirect('/electronics');
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user: req.user, errors });
    }
});

electronicController.get('/:productId/buy', hasUser(), canBuy(), async (req, res) => {
    const { productId } = req.params;
    const user = req.user;

    try {
        await buyProduct(productId, user._id);

        res.redirect(`/electronics/${productId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

electronicController.get('/search', hasUser(), async (req, res) => {
    const { name, type } = req.query;

    try {
        const electronics = await searchProduct(name, type);
        res.render('search', { title: 'Search Page', user: req.user, electronics });
    } catch (error) {
        const errors = parseError(error);

        res.render('search', { title: 'Search Page', user: req.user, errors });
    }
});

module.exports = electronicController;
