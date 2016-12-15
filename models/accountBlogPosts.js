const db = require('../lib/dbConnect.js');

function newBlogPost(req, res, next) {
  db.none(`INSERT INTO blog_posts (title, subtitle, content, image_url, artist_id)
           VALUES ($/title/, $/subtitle/, $/content/, $/image_url/, $/artist_id/);`, req.body)
  .then(next())
  .catch(err => next(err));
}

function deleteBlogPost(req, res, next) {
  db.none(`DELETE FROM blog_posts
          WHERE blog_post_id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  deleteBlogPost,
  newBlogPost,
};

