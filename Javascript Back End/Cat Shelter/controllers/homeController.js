const { getCats } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    const cats = getCats();
    res.render('home', { cats });
});

module.exports = router;
