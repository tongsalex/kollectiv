const db = require('../lib/dbConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SALT = 10;

function createUser(req, res, next) {
  db.none('INSERT INTO artists (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, SALT)])
    .then(() => {
      console.log('user created!');
      next();
    })
  .catch(error => console.log(error));
}

function authenticate(req, res, next) {
  // console.log(req.body.password);
  db.one('SELECT * FROM artists WHERE username = $/username/;', req.body)
    .then((data) => {
      // console.log(data.password);
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username }, process.env.SECRET);
        res.status(200).json(myToken);
      } else {
        res.status(500).send('Invalid User');
      }
      next();
    })
  .catch(error => console.log(error));
}

module.exports = {
  createUser,
  authenticate,
};
