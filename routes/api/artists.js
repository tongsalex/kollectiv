const artistRoute = require('express').Router();
const { getAllArtists } = require('../../models/artists.js');

const sendJSONresp = (req, res) => res.json(res.artists || []);

artistRoute.route('/')
  .get(getAllArtists, sendJSONresp);

module.exports = artistRoute;
