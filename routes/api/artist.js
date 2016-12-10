const artistRoute = require('express').Router();
const { createUser, authenticate } = require('../../models/user.js');

const sendJSONresp = (req, res) => res.json();

artistRoute.route('/signup')
  .post(createUser);

artistRoute.route('/login')
  .post(authenticate);

module.exports = artistRoute;
