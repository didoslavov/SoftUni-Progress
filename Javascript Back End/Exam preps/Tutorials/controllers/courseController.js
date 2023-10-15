const courseController = require('express').Router();
const { isOwner, hasUser, canEnroll } = require('../middlewares/guards.js');
const { createCourse, getCourseById, enroll, deleteCourse, editCourse } = require('../services/courseService.js');
const { parseError } = require('../util/parser.js');

courseController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Page', user: req.user });
});

courseController.post('/create', (req, res) => {
    const { title, description, imageUrl, duration } = req.body;
    const owner = req.user._id;

    try {
        if (!title || !description || !imageUrl || !duration) {
            throw new Error('All fields are required!');
        }

        createCourse({ title, description, imageUrl, duration, owner });

        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('create', { title: 'Create Page', errors, user: req.user });
    }
});

courseController.get('/:courseId/details', async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    try {
        const course = await getCourseById(courseId);
        const isOwner = user._id === course.owner.toString();
        const hasEnrolled = course.enrolled.some((e) => e.toString() === user._id);

        res.render('details', { title: 'Details Page', user, course, isOwner, hasEnrolled });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors });
    }
});

courseController.get('/:courseId/edit', isOwner(), async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    try {
        const course = await getCourseById(courseId);

        res.render('edit', { title: 'Edit Page', user, course });
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Edit Page', errors });
    }
});

courseController.post('/:courseId/edit', (req, res) => {
    const { title, description, imageUrl, duration } = req.body;
    const { courseId } = req.params;

    try {
        if (!title || !description || !imageUrl || !duration) {
            throw new Error('All fields are required!');
        }

        editCourse(courseId, { title, description, imageUrl, duration });

        res.redirect(`/courses/${courseId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('edit', { title: 'Edit Page', errors, user: req.user, course: { ...req.body } });
    }
});

courseController.get('/:courseId/delete', isOwner(), (req, res) => {
    const { courseId } = req.params;

    try {
        deleteCourse(courseId);

        res.redirect(`/`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors });
    }
});

courseController.get('/:courseId/enroll', hasUser(), canEnroll(), (req, res) => {
    const { courseId } = req.params;
    const userId = req.user._id;

    try {
        enroll(courseId, userId);

        res.redirect(`/courses/${courseId}/details`);
    } catch (error) {
        const errors = parseError(error);

        res.render('details', { title: 'Details Page', errors });
    }
});

module.exports = courseController;
