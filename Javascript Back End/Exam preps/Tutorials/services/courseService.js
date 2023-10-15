const Course = require('../models/Course.js');

async function getHomeUserCourses(search) {
    return Course.find({ title: { $regex: new RegExp(search, 'i') } })
        .sort({ createdAt: 1 })
        .lean();
}

async function getHomeCourses() {
    return Course.find().sort({ enrolled: -1 }).limit(3).lean();
}

async function getCourseById(courseId) {
    return Course.findById(courseId).lean();
}

async function createCourse(tutorial) {
    await Course.create(tutorial);
}

async function editCourse(courseId, course) {
    await Course.findByIdAndUpdate(courseId, course);
}

async function deleteCourse(courseId) {
    await Course.findByIdAndDelete(courseId);
}

async function enroll(courseId, userId) {
    await Course.findOneAndUpdate(
        { _id: courseId, enrolled: { $ne: userId } },
        {
            $push: { enrolled: userId },
        }
    );
}

module.exports = {
    getHomeUserCourses,
    getHomeCourses,
    getCourseById,
    createCourse,
    editCourse,
    deleteCourse,
    enroll,
};
