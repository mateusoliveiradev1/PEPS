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

module.exports = {
  addXP,
  getHistoryByUser
};
