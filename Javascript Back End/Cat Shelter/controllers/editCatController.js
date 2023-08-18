const { getAllBreeds } = require('../services/breedService.js');
const { getCatById, editCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await getCatById(id);
    const breeds = await getAllBreeds();

    res.render('editCat', { cat, breeds });
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = req.body;

    await editCat(id, cat);

    res.redirect('/');
});

module.exports = router;
