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

function updateCourse(id, title, description, cb) {
  const stmt = db.prepare('UPDATE courses SET title = ?, description = ? WHERE id = ?');
  stmt.run(title, description, id, cb);
  stmt.finalize();
}

function deleteCourse(id, cb) {
  const stmt = db.prepare('DELETE FROM courses WHERE id = ?');
  stmt.run(id, cb);
  stmt.finalize();
}

module.exports = {
  createCourse,
  getCourseById,
  listCourses,
  updateCourse,
  deleteCourse
};
