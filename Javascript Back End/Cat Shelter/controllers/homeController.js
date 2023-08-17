const { getCats } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const cats = await getCats();
    res.render('home', { cats });
});

module.exports = router;
