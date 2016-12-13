const db = require('../lib/dbConnect.js');

function deleteBlogPost(req, res, next) {
  db.none(`DELETE FROM blog_posts WHERE blog_post_id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  deleteBlogPost
};

