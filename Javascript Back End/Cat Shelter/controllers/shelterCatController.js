const { getCatById, deleteCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await getCatById(id);

    res.render('shelterCat', { cat });
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;

    await deleteCat(id);
    res.redirect('/');
});

module.exports = router;
