const { getCats } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const search = req.query.search || '';
    const cats = await getCats(search);

    res.render('home', { cats, search });
});

module.exports = router;
