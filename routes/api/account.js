const accountRoute = require('express').Router();
const { getAccountInfo } = require('../../models/account.js');

const sendJSONresp = (req, res) => res.json(res.account || []);

accountRoute.route('/:id')
  .get(getAccountInfo, sendJSONresp);

module.exports = accountRoute;
