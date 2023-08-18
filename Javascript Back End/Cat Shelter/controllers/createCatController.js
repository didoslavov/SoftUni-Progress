const { getAllBreeds } = require('../services/breedService.js');
const { createCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const breeds = await getAllBreeds();

    res.render('createCat', { breeds });
});

router.post('/', async (req, res) => {
    try {
        await createCat(req.body);

        res.redirect('/');
    } catch (error) {
        console.error(error.massege);
    }
});

module.exports = router;
