const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      throw ("could not deserialize user", err);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      // need to add a new row for a user
      // better approach will be a second table utilizing foreign keys
    }
  )
);
