const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('editCat');
});

module.exports = router;
