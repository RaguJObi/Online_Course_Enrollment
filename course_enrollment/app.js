const express = require('express');
const app = express();
const port = 3003;

// Serve static files from the public folder
app.use(express.static('public'));

// Course catalog data (replace with a database or API call)
const courses = [
  { id: 1, title: 'Introduction to HTML/CSS', description: 'This course covers the basics of HTML and CSS.' },
  { id: 2, title: 'JavaScript Fundamentals', description: 'This course covers the basics of JavaScript.' },
  { id: 3, title: 'ReactJS Essentials', description: 'This course covers the basics of ReactJS.' },
];

// Handle GET request for course catalog
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Handle GET request for root URL (/)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle GET request for enrollment page
app.get('/enrollment', (req, res) => {
  const courseId = req.query.courseId;
  const course = courses.find(c => c.id === parseInt(courseId));
  if (course) {
    res.sendFile(__dirname + '/public/enrollment.html');
  } else {
    res.status(404).send('Course not found');
  }
});

// Handle POST request for enrollment
app.post('/enroll', (req, res) => {
  const { name, email, courseId } = req.body;
  // TO DO: implement enrollment logic (e.g., send email, update database)
  res.send(`Thank you for enrolling in course ${courseId}!`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});