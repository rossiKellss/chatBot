const verifyToken = require("../utils/token-generate");
const authorizeUser = (req, res, next) => {
  const cookiename = process.env.COOKIE_NAME;
  const cookie = req.signedCookies[`${cookiename}`];
  console.log(cookie);
};

module.exports = authorizeUser;
