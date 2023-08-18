const Cat = require('../models/Cat');

async function getCats(search) {
    return Cat.find({ name: new RegExp(search, 'i') }).lean();
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

async function editCat(id, data) {
    const cat = await Cat.findById(id);

    cat.name = data.name;
    cat.description = data.description;
    cat.image = data.image;
    cat.breed = data.breed;

    cat.save();
}

async function deleteCat(id) {
    return await Cat.findByIdAndDelete(id);
}

module.exports = {
    getCats,
    getCatById,
    createCat,
    editCat,
    deleteCat,
};
