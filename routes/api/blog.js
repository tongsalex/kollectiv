const blogRoute = require('express').Router();
const { getAllBlogPosts } = require('../../models/blog.js');

const sendJSONresp = (req, res) => res.json(res.blogPosts || []);

blogRoute.route('/')
  .get(getAllBlogPosts, sendJSONresp);

blogRoute.route('/restricted')
  .post(getAllBlogPosts, sendJSONresp)
  .put(sendJSONresp)
  .delete(sendJSONresp);

module.exports = blogRoute;
