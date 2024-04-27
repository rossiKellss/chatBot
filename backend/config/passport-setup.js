const passport = require("passport");
const GoogleStragety = require("passport-google-oauth20");

passport.use(
  new GoogleStragety({
    clientID:process.env.CLIENT_ID,
    callbackURL:'auth/googe/redirect',
    clientSecret: process.env.CLIENT_SECRET,
  }),
  () => {}
);
