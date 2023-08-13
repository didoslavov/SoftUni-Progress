const path = require('path');

const createCatView = (req, res) => {
    res.sendFile('/views/addCat.html', { root: path.join(__dirname, '..') });
};

module.exports = { createCatView };
