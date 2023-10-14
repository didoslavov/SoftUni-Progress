const { hasUser, isOwner, canVote } = require('../middlewares/guards.js');
const { createPost, getAllPosts, getUserPosts, getPostById, vote, deletePost, editPost } = require('../services/postsService.js');
const { parseError } = require('../util/parser.js');

const postsController = require('express').Router();

postsController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Post', user: req.user });
});

postsController.post('/create', async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    const owner = req.user._id;

    try {
        if (!name || !species || !skinColor || !eyeColor || !image || !description) {
            throw new Error('All fields are required!');
        }

        await createPost({ name, species, skinColor, eyeColor, image, description, owner });

        res.redirect('/posts/catalog');
    } catch (error) {
        const errors = parseError(error);
        res.render('create', {
            title: 'Create Post',
            errors,
            body: {
                name,
                species,
                skinColor,
                eyeColor,
                image,
                description,
            },
        });
    }
});

postsController.get('/catalog', async (req, res) => {
    try {
        const posts = await getAllPosts();

        res.render('all-posts', { title: 'All Posts', user: req.user, posts });
    } catch (error) {
        const errors = parseError(error);

        res.render('all-posts', { title: 'All Posts', errors });
    }
});

postsController.get('/:userId/profile', hasUser(), async (req, res) => {
    const { userId } = req.params;

    try {
        const posts = await getUserPosts(userId);

        res.render('my-posts', { title: 'My Posts', user: req.user, posts });
    } catch (error) {
        const errors = parseError(error);

        res.render('my-posts', { title: 'My Posts', errors });
    }
});

postsController.get('/:postId/details', async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await getPostById(postId);

        const isOwner = post.owner._id.toString() === req.user?._id;
        const hasVoted = post.votes.some((v) => v._id.toString() === req.user?._id);
        const usersVoted = post.votes.map((v) => v.email);

        res.render('details', { title: 'Details', user: req.user, post, isOwner, hasVoted, usersVoted });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details', errors });
    }
});

postsController.get('/:postId/edit', hasUser(), isOwner(), async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await getPostById(postId);

        res.render('edit', { title: 'Edit Page', post });
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors });
    }
});

postsController.post('/:postId/edit', async (req, res) => {
    const { postId } = req.params;
    const { name, species, skinColor, eyeColor, image, description } = req.body;

    try {
        if (!name || !species || !skinColor || !eyeColor || !image || !description) {
            throw new Error('All fields are required!');
        }

        await editPost(postId, { name, species, skinColor, eyeColor, image, description });

        res.redirect(`/posts/${postId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors });
    }
});

postsController.get('/:postId/delete', hasUser(), isOwner(), async (req, res) => {
    const { postId } = req.params;

    try {
        deletePost(postId);

        res.redirect('/posts/catalog');
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details', errors });
    }
});

postsController.get('/:postId/vote', hasUser(), canVote(), async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;
    try {
        vote(postId, userId);

        res.redirect(`/posts/${postId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details', errors });
    }
});

module.exports = postsController;
