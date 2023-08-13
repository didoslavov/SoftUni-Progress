const path = require('path');

const addBreedView = (req, res) => {
    res.sendFile('/views/addBreed.html', { root: path.join(__dirname, '..') });
};

module.exports = { addBreedView };
