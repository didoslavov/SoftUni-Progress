const cats = require('../data/cats.json');

function getCats() {
    return cats;
}

function getCatById(id) {
    return cats.find((c) => c.id == id);
}

module.exports = {
    getCats,
    getCatById,
};
