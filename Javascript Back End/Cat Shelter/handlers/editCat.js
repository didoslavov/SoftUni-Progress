const path = require('path');

const editCatView = (req, res) => {
    res.sendFile('/views/editCat.html', { root: path.join(__dirname, '..') });
};

module.exports = { editCatView };
