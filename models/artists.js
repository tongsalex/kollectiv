const db = require('../lib/dbConnect.js');

function getAllArtists(req, res, next) {
  db.any(`SELECT *
          FROM artists
          ORDER BY artist_id;`)
    .then((artists) => {
      res.artists = artists;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAllArtists,
};

