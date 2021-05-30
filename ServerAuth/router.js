const Auth = require("./controllers/authentication");
const passportService = require("./util/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

module.exports = (App) => {
  App.get("/", requireAuth, (req, res, next) => {
    res.send(["waterBottle", "Phone"]);
  });
  App.post("/signin", requireSignIn, Auth.signin);
  App.post("/signup", Auth.signup);
};
