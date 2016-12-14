const blogRoute = require('express').Router();
const { getAllBlogPosts, getSingleBlogPost, editBlogPost } = require('../../models/blog.js');

const sendJSONresp = (req, res) => res.json(res.blogPosts || []);

blogRoute.route('/')
  .get(getAllBlogPosts, sendJSONresp);

blogRoute.route('/:id')
  .get(getSingleBlogPost, sendJSONresp)
  .put(editBlogPost);

module.exports = blogRoute;
