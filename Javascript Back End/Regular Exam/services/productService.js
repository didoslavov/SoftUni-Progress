const Product = require('../models/Product.js');

async function getAllProducts() {
    return Product.find().lean();
}

async function getProductById(productId) {
    return Product.findById(productId).lean();
}

async function createProduct(product) {
    return Product.create(product);
}

async function editProduct(productId, product) {
    await Product.findOneAndUpdate({ _id: productId }, product, { runValidators: true, new: true });
}

async function deleteProduct(productId) {
    await Product.findByIdAndDelete(productId);
}

async function searchProduct(name, type) {
    return Product.find({ name: { $regex: new RegExp(name, 'i') }, type: { $regex: new RegExp(type, 'i') } }).lean();
}

async function buyProduct(productId, userId) {
    await Product.findOneAndUpdate(
        {
            _id: productId,
            boughtBy: {
                $ne: userId,
            },
        },
        { $push: { boughtBy: userId } }
    );
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    searchProduct,
    buyProduct,
};
