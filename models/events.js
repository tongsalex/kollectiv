const db = require('../lib/dbConnect.js');

function getAllEvents(req, res, next) {
  db.any(`SELECT *
          FROM events
          ORDER BY date_created DESC;`)
    .then((events) => {
      res.events = events;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAllEvents,
};

