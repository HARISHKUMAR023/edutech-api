// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
//   studentsEnrolled: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Student'
//   }],
  imageUrl: {
    type: String, // URL to the course image
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
