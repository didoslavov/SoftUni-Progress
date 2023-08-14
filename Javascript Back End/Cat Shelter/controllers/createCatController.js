const { createCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('createCat');
});

router.post('/', async (req, res) => {
    await createCat(req.body);

    res.redirect('/');
});

module.exports = router;
