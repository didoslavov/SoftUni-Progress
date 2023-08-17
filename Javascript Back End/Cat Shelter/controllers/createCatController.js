const { createCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('createCat');
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
