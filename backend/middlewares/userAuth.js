require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = require('../impDocs/jwt_key');

function userMiddleware(req, res, next) {
  const authentication = req.headers.authorization;
  if (authentication) {
    const token = authentication.split(" ")[1];
    const decodedValue = jwt.verify(token, SECRET_KEY);
    
    if (decodedValue.email) {
      next();
    } else {
      res.status(401).json({
        message: "Authorization Header missing",
      });
    }
  }
}

module.exports = userMiddleware;
