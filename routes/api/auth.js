const express = require('express');
const { logIn } = require('../../lib/auth.js');

const authRoute = express.Router();
const sendJSONresp = (req, res) => res.json(res.user || []);

authRoute.route('/')
 .post(logIn, sendJSONresp);

module.exports = authRoute;
