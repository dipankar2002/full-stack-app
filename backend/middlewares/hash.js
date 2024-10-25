const bcrypt = require("bcryptjs");
// const { userDb } = require("../db/accountDB");
const saltRounds = 10;

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function comparePassword(inputPassword, hashedPassword) {
  const isPassword = await bcrypt.compare(inputPassword, hashedPassword);
  return isPassword;
}

module.exports = {
  hashPassword,
  comparePassword,
};
