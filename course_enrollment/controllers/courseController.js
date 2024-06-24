const Course = require('../models/course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.render('courses', { courses });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching courses');
  }
};