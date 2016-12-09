const db = require('../lib/dbConnect.js');

function listArtists(req, res, next) {
  db.any('SELECT * from artists;')
    .then((artists) => {
      res.artists = artists;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}


module.exports = {
  listArtists,
};
