const db = require('../lib/dbConnect.js');

function findUser(username) {
  return db.one(`SELECT *
                FROM users
                WHERE username = $1;
                `, [username])
                .catch(err => next(err));
}

module.exports = {
  findUser,
};
