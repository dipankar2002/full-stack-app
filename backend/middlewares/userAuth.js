// require("dotenv").config();
const jwt = require("jsonwebtoken");
// const SECRET_KEY = require("../impDocs/jwt_key");

function userMiddleware(req, res, next) {
  const authentication = req.headers.authorization;
  
  if (!authentication) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }

  const token = authentication.split(" ")[1];

  try {
    const decodedValue = jwt.verify(token, process.env.SECRET_KEY);
    if (decodedValue.email) {
      req.email = decodedValue.email;
      next();
    } else {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}

module.exports = userMiddleware;
