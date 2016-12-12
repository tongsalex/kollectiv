const userRoute = require('express').Router();
const { createUser, authenticate } = require('../../models/user.js');

const sendJSONresp = (req, res) => res.json();

userRoute.route('/signup')
  .post(createUser);

userRoute.route('/login')
  .post(authenticate);

module.exports = userRoute;
