const UserModel = require("../models/User");
const TokenGenerator = require("../util/TokenAuth");
exports.signup = (req, res, next) => {
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;
  if (!email || !userName || !password) {
    return res
      .status(422)
      .send({ error: "You must provide Email, Username and Password" });
  }

  // user given email exists
  UserModel.findOne({ email, userName }, (err, existingUser) => {
    // if Email and userName exists, throw Error

    if (existingUser) {
      const { email: DBEmail, userName: DBUserName } = existingUser;
      if (userName === DBUserName) {
        return res.status(422).send({ error: "User Name is in Use" });
      }
      if (DBEmail === email) {
        return res.status(422).send({ error: "Email is in Use" });
      }
    }
    if (err) {
      return next(err);
    }
    // Create a new User
    const user = new UserModel({
      email,
      userName,
      password,
    });
    user.save((err) => {
      if (err) {
        return next(err);
      }

      res.json({ token: TokenGenerator(user) });
    });
    // return request
  });

  //   res.send({ success: true });
};
exports.signin = function (req, res, next) {
  // User Authentication
  // add token
  res.send({ token: TokenGenerator(req.user) });
};
