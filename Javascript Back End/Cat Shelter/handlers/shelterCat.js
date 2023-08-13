const path = require('path');

const shelterCatView = (req, res) => {
    res.sendFile('/views/catShelter.html', { root: path.join(__dirname, '..') });
};

module.exports = { shelterCatView };
