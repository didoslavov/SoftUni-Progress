const { getCourseById } = require('../services/courseService.js');

function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
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

function isOwner() {
    return async (req, res, next) => {
        const { courseId } = req.params;
        const userId = req.user._id;

        const course = await getCourseById(courseId);

        if (req.user && userId === course.owner.toString()) {
            next();
        } else {
            res.redirect(`/courses/${courseId}/details`);
        }
    };
}

function canEnroll() {
    return async (req, res, next) => {
        const { courseId } = req.params;
        const userId = req.user?._id;

        const course = await getCourseById(courseId);

        if (req.user && userId !== course.owner.toString()) {
            next();
        } else {
            res.redirect(`/courses/${courseId}/details`);
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    isOwner,
    canEnroll,
};
