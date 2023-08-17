const { getCatById, editCat } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await getCatById(id);

    res.render('editCat', { cat });
});

router.post('/', async (req, res) => {
    const cat = req.body;
    console.log(cat);

    // await editCat(cat);

    res.redirect('/');
});

module.exports = router;
