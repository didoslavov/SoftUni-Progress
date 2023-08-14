const fs = require('fs');
const path = require('path');

const cats = JSON.parse(fs.readFileSync(path.join(__dirname, '../data', 'cats.json')));

function getCats() {
    return cats;
}

function getCatById(id) {
    return cats.find((c) => c.id == id);
}

async function createCat(data) {
    const id = ('0000' + Math.floor((Math.random() * 999999999) | 0)).slice(-13);
    data.id = id;

    cats.push(data);

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../data', 'cats.json'), JSON.stringify(cats, null, 2), (err) => {
            if (err == null) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {
    getCats,
    getCatById,
    createCat,
};
