const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require('../database/db.js');
require("dotenv").config();

passport.serializeUser((user, done) => {
  console.log('USER HERE FROM SERIALIZATION', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.findUser(id)
  .then((user) => {
    console.log('deserialize user')
    done(null, user[0]);
  })
  .catch((err) => {
    throw ('could not deserialize user', err);
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
      console.log('passport use');
      db.findUser(profile.id)
      .then((user) => {
        if (user[0].count === 0) {
          db.addUser(profile.id, profile.displayName);
        } else {
          console.log(user); // testing
          done(null, user[0]);
        }
      })
      .catch((err) => {
        console.error('error querying database for user');
        console.log(err)
      });
    }
  )
);
