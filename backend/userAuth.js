require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

function userMiddleware(req, res, next) {
  const authentication = req.headers.authorization;
  if (authentication) {
    const token = authentication.split(" ")[1];
    const decodedValue = jwt.verify(token, JWT_SECRET);
    if (decodedValue.username) {
      next();
    } else {
      res.status(401).json({
        message: "Authorization Header missing",
      });
    }
  }
}

module.exports = userMiddleware;
