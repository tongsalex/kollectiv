const accountBlogPosts = require('express').Router();
const { deleteBlogPost, newBlogPost } = require('../../models/accountBlogPosts.js');

const sendJSONresp = (req, res) => res.json(res.accountBlogPosts || []);

accountBlogPosts.route('/:id')
  .delete(deleteBlogPost, sendJSONresp);

accountBlogPosts.route('/')
  .post(newBlogPost);

module.exports = accountBlogPosts;
