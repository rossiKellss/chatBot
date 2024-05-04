const { verifyToken } = require("../utils/token-generate");
const authorizeUser = (req, res, next) => {
  const cookiename = process.env.COOKIE_NAME;
  const cookie = req.signedCookies[`${cookiename}`];
  if (!cookie) {
    res.status(401).json({"message":"Token not found"});
  }
  const verifiedData = verifyToken(cookie);
  if(!verifiedData){
    res.status(401).json({message:"User not verified"});
  }
  req.user = verifiedData;

  next();
};


module.exports = authorizeUser;
