const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('shelterCat');
});

module.exports = router;
