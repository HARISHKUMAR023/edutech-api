// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../Controllers/crouse.controllers');

// router.get('/', courseController.getAllCourses);
// router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);  // Updated to handle file upload
// router.put('/:id', courseController.updateCourse);
// router.delete('/:id', courseController.deleteCourse);
// router.post('/:courseId/enroll/:studentId', courseController.enrollStudent);
// router.get('/cards', courseController.getCourseCards);

module.exports = router;
