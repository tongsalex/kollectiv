const userModel = require('../models/auth.js');
const jwt = require('jsonwebtoken');

 // #1
function logIn(req, res, next) {
  const userPayload = req.body;

  userModel.findUser(userPayload.username).then((dbUser) => {
    const matches = userPayload.password === dbUser.password;

    console.log(dbUser.password, matches);

    if (matches) {
      const token = jwt.sign(dbUser, process.env.JWT_SECRET, {
        expiresIn: 1440,
      });
      dbUser.token = token;
      res.user = dbUser;
      next();
    } else {
      res.error = true;
      next();
    }
  })
      /* NOTE: NO USERS or all ERRORS*/
      .catch((error) => {
        console.error('Error ', error);
        res.error = error;
        next();
      });
}

module.exports = {
  logIn,
};

