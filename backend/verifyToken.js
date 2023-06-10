const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  const header = req.headers;
  if (header.token) {
    const token = header.token.split(' ')[1]; //[0] = Bearer

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json("Invalid Token");
      } else {
        req.user = user;
      }
      next();
    });
  } else {
    return res.status(401).json("Authentication Failed");
  }
}

module.exports = verify;