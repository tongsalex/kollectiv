const db = require('../lib/dbConnect.js');

function getAllBlogPosts(req, res, next) {
  db.any(`SELECT artists.artist_id, artists.username, blog_posts.blog_post_id, blog_posts.title, blog_posts.subtitle, blog_posts.content, blog_posts.image_url, blog_posts.date_created
          FROM blog_posts
          INNER JOIN artists
          ON blog_posts.artist_id = artists.artist_id
          ORDER BY blog_posts.date_created DESC;`)
    .then((blogPosts) => {
      res.blogPosts = blogPosts;
      next();
    })
    .catch(err => next(err));
}

function getSingleBlogPost(req, res, next) {
  db.one(`SELECT *
          FROM blog_posts
          WHERE blog_post_id=$1;`, [req.params.id])
    .then((blogPosts) => {
      res.blogPosts = blogPosts;
      next();
    })
    .catch(err => next(err));
}

function editBlogPost(req, res, next) {
  db.none(`UPDATE blog_posts
           SET title = $2, subtitle = $3, content = $4, image_url = $5
           WHERE blog_post_id = $1;`, [req.params.id, req.body.title, req.body.subtitle, req.body.content, req.body.image_url])
  .then(next())
  .catch(err => next(err));
}

module.exports = {
  getAllBlogPosts,
  getSingleBlogPost,
  editBlogPost,
};

