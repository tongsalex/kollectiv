const db = require('../lib/dbConnect.js');

function getAccountInfo(req, res, next) {
  db.one(`SELECT artist_id, username, first_name, last_name, bio, email, date(date_created)
          FROM artists
          WHERE username = $1`, [req.params.id])
    .then((account) => {
      res.account = account;
      next();
    })
    .catch(err => next(err));
}

function updateAccountInfo(req, res, next) {
  db.none(`UPDATE artists
           SET first_name = $2, last_name = $3, bio = $4, email = $5
           WHERE username = $1;`, [req.params.id, req.body.first_name, req.body.last_name, req.body.bio, req.body.email])
  .then(next())
  .catch(err => next(err));
}

function getAccountBlogPosts(req, res, next) {
  db.any(`SELECT *
          FROM blog_posts
          WHERE artist_id = $1
          ORDER BY date_created DESC`, [req.params.id])
    .then((accountBlogPosts) => {
      res.account = accountBlogPosts;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAccountInfo,
  updateAccountInfo,
  getAccountBlogPosts,
};

