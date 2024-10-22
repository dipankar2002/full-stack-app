require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

function userMiddleware(req, res, next) {
  const authentication = req.headers.authorization;
  if (authentication) {
    const token = authentication.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ msg: "Authorization Header missing" });
  }
}

module.exports = userMiddleware;
