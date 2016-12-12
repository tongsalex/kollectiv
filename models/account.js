const db = require('../lib/dbConnect.js');

function getAccountInfo(req, res, next) {
  db.one(`SELECT username, first_name, last_name, bio, email, date(date_created)
          FROM artists
          WHERE username = $1`, [req.params.id])
    .then((account) => {
      res.account = account;
      next();
    })
    .catch(err => next(err));
}

// function getAccountInfo(req, res, next) {
//   db.any(`SELECT artists.artist_id, artists.username, blog_posts.blog_post_id, blog_posts.title, blog_posts.content, blog_posts.image_url, blog_posts.date_created
//           FROM artists
//           INNER JOIN blog_posts
//           ON artists.artist_id = blog_posts.artist_id
//           WHERE artists.username = $1`, [req.params.id])
//     .then((account) => {
//       res.account = account;
//       next();
//     })
//     .catch(err => next(err));
// }

module.exports = {
  getAccountInfo,
};

