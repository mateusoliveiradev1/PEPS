const { db } = require('../db');

function addXP(userId, courseId, xp, cb) {
  const stmt = db.prepare('INSERT INTO xp_history (user_id, course_id, xp) VALUES (?, ?, ?)');
  stmt.run(userId, courseId, xp, function(err) {
    cb(err, this ? this.lastID : null);
  });
  stmt.finalize();
}

function getHistoryByUser(userId, cb) {
  db.all('SELECT * FROM xp_history WHERE user_id = ? ORDER BY ts DESC', [userId], cb);
}

function getEntryById(id, cb) {
  db.get('SELECT * FROM xp_history WHERE id = ?', [id], cb);
}

function updateEntry(id, userId, courseId, xp, cb) {
  const stmt = db.prepare('UPDATE xp_history SET user_id = ?, course_id = ?, xp = ? WHERE id = ?');
  stmt.run(userId, courseId, xp, id, cb);
  stmt.finalize();
}

function deleteEntry(id, cb) {
  const stmt = db.prepare('DELETE FROM xp_history WHERE id = ?');
  stmt.run(id, cb);
  stmt.finalize();
}

module.exports = {
  addXP,
  getHistoryByUser,
  getEntryById,
  updateEntry,
  deleteEntry
};
