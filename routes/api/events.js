const eventRoute = require('express').Router();
const { getAllEvents } = require('../../models/events.js');

const sendJSONresp = (req, res) => res.json(res.events || []);

eventRoute.route('/')
  .get(getAllEvents, sendJSONresp);

module.exports = eventRoute;
