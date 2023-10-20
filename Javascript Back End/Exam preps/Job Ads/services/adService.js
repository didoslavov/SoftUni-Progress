const Ad = require('../models/Ad.js');
const User = require('../models/User.js');

async function getAllAds() {
    return Ad.find().lean();
}

async function getHomeAds() {
    return Ad.find().limit(3).lean();
}

async function getAdById(adId) {
    return Ad.findById(adId).populate('owner applicants').lean();
}

async function createAd(ad) {
    return Ad.create(ad);
}

async function editAd(adId, ad) {
    return Ad.findOneAndUpdate({ _id: adId }, ad, { new: true });
}

async function deleteAd(adId) {
    await Ad.findByIdAndDelete(adId);
    await User.updateMany({ ads: adId }, { $pull: { ads: adId } });
}

async function apply(userId, adId) {
    await User.findOneAndUpdate(
        {
            _id: userId,
            ads: {
                $ne: adId,
            },
        },
        { $push: { ads: adId } },
        { new: true }
    );
    await Ad.findOneAndUpdate(
        {
            _id: adId,
            applicants: {
                $ne: userId,
            },
        },
        { $push: { applicants: userId } },
        { new: true }
    );
}

async function searchAd(search) {
    return Ad.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'owner',
                foreignField: '_id',
                as: 'owner',
            },
        },
        {
            $match: {
                'owner.email': { $regex: new RegExp(search, 'i') },
            },
        },
    ]);
}

module.exports = {
    getAllAds,
    getHomeAds,
    getAdById,
    createAd,
    editAd,
    deleteAd,
    apply,
    searchAd,
};
