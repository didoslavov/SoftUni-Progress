const { hasUser, isOwner, canApply } = require('../middlewares/guards.js');
const { getAllAds, createAd, searchAd, getAdById, apply, deleteAd, editAd } = require('../services/adService.js');
const { parseError } = require('../util/parser.js');

const adController = require('express').Router();

adController.get('/', async (req, res) => {
    try {
        const ads = await getAllAds();

        res.render('catalog', { title: 'Catalog Page', user: req.user, ads });
    } catch (error) {
        const errors = parseError(error);

        res.render('catalog', { title: 'Catalog Page', user: req.user, errors });
    }
});

adController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

adController.post('/create', hasUser(), async (req, res) => {
    const { title, location, company, description } = req.body;
    const user = req.user;

    try {
        if (!title || !location || !company || !description) {
            throw new Error('All fields are required!');
        }

        await createAd({ title, location, company, description, owner: user._id });

        res.redirect('/ads');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', user, errors, ad: { ...req.body } });
    }
});

adController.get('/:adId/details', async (req, res) => {
    const { adId } = req.params;
    const user = req.user;

    try {
        const ad = await getAdById(adId);
        const isOwner = ad.owner._id.toString() === user?._id;
        const hasApplied = ad.applicants.some((a) => a._id.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, ad, isOwner, hasApplied });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

adController.get('/:adId/edit', hasUser(), isOwner(), async (req, res) => {
    const { adId } = req.params;
    const user = req.user;

    try {
        const ad = await getAdById(adId);

        res.render('edit', { title: 'Edit Page', user, ad });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', user, errors });
    }
});

adController.post('/:adId/edit', hasUser(), isOwner(), async (req, res) => {
    const { adId } = req.params;
    const { title, location, company, description } = req.body;
    const user = req.user;

    try {
        if (!title || !location || !company || !description) {
            throw new Error('All fields are required!');
        }

        await editAd(adId, { title, location, company, description });

        res.redirect(`/ads/${adId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Create Page', user, errors, ad: { ...req.body } });
    }
});

adController.get('/:adId/delete', hasUser(), isOwner(), async (req, res) => {
    const { adId } = req.params;
    const user = req.user;

    try {
        await deleteAd(adId);

        res.redirect('/ads');
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

adController.get('/:adId/apply', hasUser(), canApply(), async (req, res) => {
    const { adId } = req.params;
    const user = req.user;

    try {
        await apply(user._id, adId);

        res.redirect(`/ads/${adId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', user, errors });
    }
});

adController.get('/search', hasUser(), async (req, res) => {
    const { search } = req.query;

    try {
        const ads = await searchAd(search);

        res.render('search', { title: 'Search Page', user: req.user, ads });
    } catch (error) {
        const errors = parseError(error);

        res.render('search', { title: 'Search Page', user: req.user, errors });
    }
});

module.exports = adController;
