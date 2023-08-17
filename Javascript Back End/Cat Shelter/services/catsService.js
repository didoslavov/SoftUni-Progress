const Cat = require('../models/Cat');

async function getCats() {
    return Cat.find({}).lean();
}

async function getCatById(id) {
    return Cat.findById(id).lean();
}

async function createCat(data) {
    const cat = {
        name: data.name,
        description: data.description,
        image: data.image,
        breed: data.breed,
    };

    const result = await Cat.create(cat);

    return result;
}

// async function editCat(data) {
//     const catIndex = cats.findIndex((c) => c.id == data.id);
//     cats.splice(catIndex, 1);
//     cats.push(data);

//     await persist();
// }

// async function persist() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path.join(__dirname, '../data', 'cats.json'), JSON.stringify(cats, null, 2), (err) => {
//             if (err == null) {
//                 resolve();
//             } else {
//                 reject(err);
//             }
//         });
//     });
// }

module.exports = {
    getCats,
    getCatById,
    createCat,
};
