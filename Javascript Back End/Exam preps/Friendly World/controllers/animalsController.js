const { canDonate, isOwner, hasUser } = require('../middlewares/guards.js');
const {
    getAllAnimals,
    createAnimal,
    getAnimalById,
    searchAnimalByLocation,
    donate,
    updateAnimal,
    deleteAnimal,
} = require('../services/animalService.js');
const { parseError } = require('../util/parser');

const animalsController = require('express').Router();

animalsController.get('/catalog', async (req, res) => {
    try {
        const animals = await getAllAnimals();

        res.render('dashboard', { title: 'Catalog', animals, user: req.user });
    } catch (error) {
        const errors = parseError(error);

        res.render('dashboard', { errors });
    }
});

animalsController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

animalsController.post('/create', async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const userId = req.user._id;

    try {
        if (!name || !years || !kind || !image || !need || !location || !description) {
            throw new Error('All fields are required!');
        }

        await createAnimal({ name, years, kind, image, need, location, description, owner: userId });

        res.redirect('/animals/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', errors, animal: { ...req.body } });
    }
});

animalsController.get('/search', async (req, res) => {
    const { search } = req.query;

    const animals = await searchAnimalByLocation(search);

    res.render('search', { title: 'Search Page', animals });
});

animalsController.get('/:animalId/details', async (req, res) => {
    const { animalId } = req.params;
    const user = req.user;

    try {
        const animal = await getAnimalById(animalId);

        const isOwner = animal.owner._id.toString() === user?._id;
        const hasDonated = animal.donations.some((v) => v._id.toString() === user?._id);

        res.render('details', { title: 'Details Page', user, animal, isOwner, hasDonated });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors });
    }
});

animalsController.get('/:animalId/edit', hasUser(), isOwner(), async (req, res) => {
    const { animalId } = req.params;

    try {
        const animal = await getAnimalById(animalId);

        res.render('edit', { title: 'Edit Page', user: req.user, animal });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors });
    }
});

animalsController.post('/:animalId/edit', async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const { animalId } = req.params;

    try {
        if (!name || !years || !kind || !image || !need || !location || !description) {
            throw new Error('All fields are required!');
        }

        updateAnimal(animalId, { name, years, kind, image, need, location, description });

        res.redirect(`/animals/${animalId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, animal: { ...req.body } });
    }
});

animalsController.get('/:animalId/delete', hasUser(), isOwner(), (req, res) => {
    const { animalId } = req.params;

    try {
        deleteAnimal(animalId);

        res.redirect('/animals/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.redirect(`/animals/${animalId}/details`);
    }
});

animalsController.get('/:animalId/donate', canDonate(), (req, res) => {
    const { animalId } = req.params;
    const userId = req.user._id;

    try {
        donate(animalId, userId);

        res.redirect(`/animals/${animalId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details', errors });
    }
});

module.exports = animalsController;
