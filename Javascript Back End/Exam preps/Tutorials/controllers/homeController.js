const { getHomeUserCourses, getHomeCourses } = require('../services/courseService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router();

//TODO: Replace with real controller
homeController.get('/', async (req, res) => {
    const { search } = req.query;

    try {
        if (req.user) {
            const courses = await getHomeUserCourses(search);

            res.render('user-home', {
                title: 'Home Page',
                user: req.user,
                courses,
            });
        } else {
            const courses = await getHomeCourses();
            res.render('guest-home', { title: 'Home Page', courses });
        }
    } catch (error) {
        const errors = parseError(error);

        if (req.user) {
            const courses = await getHomeUserCourses();

            res.render('user-home', {
                title: 'Home Page',
                user: req.user,
                errors,
                courses,
            });
        } else {
            const courses = await getHomeCourses();
            res.render('guest-home', { title: 'Home Page', errors, courses });
        }
    }
});

module.exports = homeController;
