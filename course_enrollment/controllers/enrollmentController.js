const Enrollment = require('../models/enrollment');
const Course = require('../models/course');

exports.enrollInCourse = async (req, res) => {
  try {
    const { courseId, userId } = req.body;
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send('Course not found');
    }
    const enrollment = new Enrollment({ courseId, userId });
    await enrollment.save();
    res.send(`Enrolled in course ${course.title} successfully`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error enrolling in course');
  }
};