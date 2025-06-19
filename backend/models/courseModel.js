const { db } = require('../db');

function createCourse(title, description, cb) {
  const stmt = db.prepare('INSERT INTO courses (title, description) VALUES (?, ?)');
  stmt.run(title, description, function(err) {
    cb(err, this ? this.lastID : null);
  });
  stmt.finalize();
}

function getCourseById(id, cb) {
  db.get('SELECT * FROM courses WHERE id = ?', [id], cb);
}

function listCourses(cb) {
  db.all('SELECT * FROM courses', cb);
}

module.exports = {
  createCourse,
  getCourseById,
  listCourses
};
