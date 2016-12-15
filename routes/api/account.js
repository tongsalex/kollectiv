const accountRoute = require('express').Router();
const { getAccountInfo, updateAccountInfo, getAccountBlogPosts } = require('../../models/account.js');

const sendJSONresp = (req, res) => res.json(res.account || []);

accountRoute.route('/:id')
  .get(getAccountInfo, sendJSONresp)
  .put(updateAccountInfo);

accountRoute.route('/blogposts/:id')
  .get(getAccountBlogPosts, sendJSONresp);

module.exports = accountRoute;
