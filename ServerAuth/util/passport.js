const passport = require("passport");
const User = require("../models/User");
const config = require("config");
const secretKey = config.get("jwtSecret");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// local
let localOpts = {
  usernameField: "email",
};
const localLogin = new LocalStrategy(localOpts, function (
  email,
  password,
  done
) {
  // verify
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (!user) {
      return done(null, false);
    }

    user.ComparePassword(password, function (err, match) {
      if (err) {
        return done(err);
      }
      if (!match) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
  // done false
});
// Set Option for JWT strategy
let opts = {};

opts.jwtFromRequest = ExtractJWT.fromHeader("authorization");
opts.secretOrKey = secretKey;
// Create JWT Strategy
const jwtLogin = new JWTStrategy(opts, function (payload, done) {
  // Check userID exists
  User.findById(payload.data, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
// Tell Passport to use Strategy
