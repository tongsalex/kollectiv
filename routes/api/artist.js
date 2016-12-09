const express = require('express');
const { listArtists } = require('../../models/artist.js');

const artistRoute = express.Router();
const sendJSONresp = (req, res) => res.json(res.artists || []);

artistRoute.route('/')
   .get(listArtists, sendJSONresp);

module.exports = artistRoute;
