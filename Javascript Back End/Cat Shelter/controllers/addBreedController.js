const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('addBreed');
});

module.exports = router;
