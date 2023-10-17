const Book = require('../models/Book.js');

async function getAllReviews() {
    return Book.find().lean();
}

async function getReviewById(reviewId) {
    return Book.findById(reviewId).lean();
}

async function getUserReviews(userId) {
    return Book.find({ owner: userId }).lean();
}

async function createReview(review) {
    return Book.create(review);
}

async function editReview(reviewId, review) {
    return Book.findOneAndUpdate({ _id: reviewId }, review, { runValidators: true });
}

async function deleteReview(reviewId) {
    await Book.findByIdAndDelete(reviewId);
}

async function wishBook(bookId, userId) {
    await Book.findOneAndUpdate(
        {
            _id: bookId,
            wishList: {
                $ne: userId,
            },
        },
        { $push: { wishList: userId } }
    );
}

module.exports = {
    getAllReviews,
    getReviewById,
    getUserReviews,
    createReview,
    editReview,
    deleteReview,
    wishBook,
};
