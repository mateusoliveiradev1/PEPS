const express = require('express');
const users = require('./models/userModel');
const courses = require('./models/courseModel');
const xpHistory = require('./models/xpHistoryModel');

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  users.createUser(name, email, 0, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    users.getUserById(id, (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

app.get('/users', (req, res) => {
  users.listUsers((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Courses routes
app.post('/courses', (req, res) => {
  const { title, description } = req.body;
  courses.createCourse(title, description, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    courses.getCourseById(id, (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

app.get('/courses', (req, res) => {
  courses.listCourses((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/courses/:id', (req, res) => {
  courses.getCourseById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Course not found' });
    res.json(row);
  });
});

app.put('/courses/:id', (req, res) => {
  const { title, description } = req.body;
  courses.updateCourse(req.params.id, title, description, err => {
    if (err) return res.status(500).json({ error: err.message });
    courses.getCourseById(req.params.id, (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

app.delete('/courses/:id', (req, res) => {
  courses.deleteCourse(req.params.id, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// XP history routes
app.post('/xp-history', (req, res) => {
  const { user_id, course_id, xp } = req.body;
  xpHistory.addXP(user_id, course_id, xp, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    xpHistory.getEntryById(id, (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

app.get('/xp-history/user/:userId', (req, res) => {
  xpHistory.getHistoryByUser(req.params.userId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/xp-history/:id', (req, res) => {
  xpHistory.getEntryById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Entry not found' });
    res.json(row);
  });
});

app.put('/xp-history/:id', (req, res) => {
  const { user_id, course_id, xp } = req.body;
  xpHistory.updateEntry(req.params.id, user_id, course_id, xp, err => {
    if (err) return res.status(500).json({ error: err.message });
    xpHistory.getEntryById(req.params.id, (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

app.delete('/xp-history/:id', (req, res) => {
  xpHistory.deleteEntry(req.params.id, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
