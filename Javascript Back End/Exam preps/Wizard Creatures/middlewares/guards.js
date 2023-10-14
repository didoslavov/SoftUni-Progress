const { getPostById } = require('../services/postsService.js');

function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isOwner() {
    return async (req, res, next) => {
        const { postId } = req.params;
        const userId = req.user._id;

        const post = await getPostById(postId);
        console.log(post);
        if (req.user && userId === post.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/posts/${postId}/details`);
        }
    };
}

function canVote() {
    return async (req, res, next) => {
        const { postId } = req.params;
        const userId = req.user._id;

        const post = await getPostById(postId);
        console.log(post);
        if (req.user && userId !== post.owner._id.toString()) {
            next();
        } else {
            res.redirect(`/posts/${postId}/details`);
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/'); //TODO: Check assignment for correct redirect
        } else {
            next();
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    isOwner,
    canVote,
};
