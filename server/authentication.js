const passport = require('passport');
require('./passport-setup.js');

const authScope = passport.authenticate('google', {
  scope: ['email', 'profile'],
});
const googleAuth = passport.authenticate('google');
const loggedinRedirect = (req, res) => {
  res.redirect('/loggedin');
};
const sendUser = (req, res) => {
  res.send({ userName: req.user.user_name, id: req.user.id });
};
const homeRedirect = (req, res) => {
  res.redirect('/');
};
const logout = (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
};
const authCheck = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = {
  authScope,
  googleAuth,
  loggedinRedirect,
  sendUser,
  homeRedirect,
  logout,
  authCheck,
};