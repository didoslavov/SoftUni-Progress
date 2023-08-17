const { createBreed } = require('../services/breedService.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('addBreed');
});

router.post('/', async (req, res) => {
    try {
        await createBreed(req.body);

        res.redirect('/cats/add-breed');
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;
