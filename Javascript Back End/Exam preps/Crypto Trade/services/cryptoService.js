const Coin = require('../models/Coin.js');

async function getAllCrypto() {
    return Coin.find().lean();
}

async function getCryptoById(cryptoId) {
    return Coin.findById(cryptoId).lean();
}

async function createCrypto(crypto) {
    return Coin.create(crypto);
}

async function editCrypto(cryptoId, crypto) {
    return Coin.findOneAndUpdate({ _id: cryptoId }, crypto, { runValidators: true });
}

async function deleteCrypto(cryptoId) {
    await Coin.findByIdAndDelete(cryptoId);
}

async function buyCrypto(cryptoId, userId) {
    await Coin.findOneAndUpdate(
        {
            _id: cryptoId,
            boughtBy: {
                $ne: userId,
            },
        },
        { $push: { boughtBy: userId } }
    );
}

async function searchCrypto(search, payment) {
    if (!search) {
        return Coin.find().lean();
    }
    return Coin.find({
        name: {
            $regex: new RegExp(search, 'i'),
        },
        payment: payment,
    }).lean();
}

module.exports = {
    getAllCrypto,
    getCryptoById,
    createCrypto,
    editCrypto,
    deleteCrypto,
    buyCrypto,
    searchCrypto,
};
