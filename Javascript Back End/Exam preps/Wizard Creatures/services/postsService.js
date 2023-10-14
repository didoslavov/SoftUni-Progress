const Creature = require('../models/Creature.js');

async function createPost(creature) {
    return Creature.create(creature);
}

async function getAllPosts() {
    return Creature.find().lean();
}

async function getUserPosts(userId) {
    return Creature.find({ owner: userId }).populate('owner', '-hashedPassword').lean();
}

async function getPostById(postId) {
    return Creature.findById(postId).populate('owner votes', '-hashedPassword').lean();
}

async function editPost(postId, post) {
    await Creature.findByIdAndUpdate(postId, post);
}

async function deletePost(postId) {
    await Creature.findByIdAndDelete(postId);
}

async function vote(postId, userId) {
    await Creature.findOneAndUpdate(
        { _id: postId, votes: { $ne: userId } },
        {
            $push: { votes: userId },
        }
    );
}

module.exports = {
    createPost,
    getAllPosts,
    getUserPosts,
    getPostById,
    editPost,
    deletePost,
    vote,
};
