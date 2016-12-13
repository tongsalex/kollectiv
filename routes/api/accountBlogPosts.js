const accountBlogPosts = require('express').Router();
const { deleteBlogPost } = require('../../models/accountBlogPosts.js');

const sendJSONresp = (req, res) => res.json(res.accountBlogPosts || []);

accountBlogPosts.route('/:id')
  .delete(deleteBlogPost, sendJSONresp);

module.exports = accountBlogPosts;
