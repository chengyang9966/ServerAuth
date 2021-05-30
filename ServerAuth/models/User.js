const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
// Define User Schema
const userSchema = new Schema({
  email: { unique: true, type: String, lowercase: true, require: true },
  userName: { unique: true, type: String, lowercase: true, require: true },
  password: { type: String, require: true },
});

// On Save Hook
// before save a model
userSchema.pre("save", function (next) {
  // get Access to the user model
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });

    // bcrypt.hash(this.password, salt, function (err, hash) {
    //   console.log("hash:", hash);
    //   if (err) {
    //     return next(err);
    //   }

    //   this.password = hash;
    //   next();
    // });
  });
});

userSchema.methods.ComparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      return callback(err);
    }
    callback(null, match);
  });
};
const ModelClass = mongoose.model("user", userSchema);
// Create Model Class
module.exports = ModelClass;
