const express = require('express');
const { init } = require('./db');
const users = require('./models/userModel');
const courses = require('./models/courseModel');
const xpHistory = require('./models/xpHistoryModel');

init();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
