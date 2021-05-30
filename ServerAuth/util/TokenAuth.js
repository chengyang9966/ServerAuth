const jwt = require("jsonwebtoken");
const config = require("config");
const Key = config.get("jwtSecret");

const TokenGenerator = (user) => {
  return jwt.sign({ data: user._id }, Key, {
    expiresIn: "7 days", // expires in 24 hours
  });
};

module.exports = TokenGenerator;
