// controllers/courseController.js
const Course = require('../Model/Crouse.model');
const upload = require('../config/multerConfig').single('image'); ; // Multer configuration

// Existing methods...

exports.createCourse = (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
  
      const { title, description, instructor, duration } = req.body;
      const imageUrl = req.file ? `/uploads/courses/${req.file.filename}` : '';
  
      // Validate required fields
      if (!title || !description || !instructor || !duration || !imageUrl) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const course = new Course({
        title,
        description,
        instructor,
        duration,
        imageUrl
      });
  
      try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
  };