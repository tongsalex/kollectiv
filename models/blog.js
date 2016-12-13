const db = require('../lib/dbConnect.js');

function getAllBlogPosts(req, res, next) {
  db.any(`SELECT artists.artist_id, artists.username, blog_posts.blog_post_id, blog_posts.title, blog_posts.subtitle, blog_posts.content, blog_posts.image_url, blog_posts.date_created
          FROM blog_posts
          INNER JOIN artists
          ON blog_posts.artist_id = artists.artist_id
          ORDER BY blog_posts.blog_post_id;`)
    .then((blogPosts) => {
      res.blogPosts = blogPosts;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAllBlogPosts,
};

