const blogRoute = require('express').Router();
const { getAllBlogPosts, getSingleBlogPost } = require('../../models/blog.js');

const sendJSONresp = (req, res) => res.json(res.blogPosts || []);

blogRoute.route('/')
  .get(getAllBlogPosts, sendJSONresp);

blogRoute.route('/:id')
  .get(getSingleBlogPost, sendJSONresp);

module.exports = blogRoute;
