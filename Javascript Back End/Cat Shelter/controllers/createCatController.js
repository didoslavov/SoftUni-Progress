const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('createCat');
});

module.exports = router;
