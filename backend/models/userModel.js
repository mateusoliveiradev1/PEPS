const { db } = require('../db');

function createUser(name, email, xp = 0, cb) {
  const stmt = db.prepare('INSERT INTO users (name, email, xp) VALUES (?, ?, ?)');
  stmt.run(name, email, xp, function(err) {
    cb(err, this ? this.lastID : null);
  });
  stmt.finalize();
}

function getUserById(id, cb) {
  db.get('SELECT * FROM users WHERE id = ?', [id], cb);
}

function listUsers(cb) {
  db.all('SELECT * FROM users', cb);
}

module.exports = {
  createUser,
  getUserById,
  listUsers
};
