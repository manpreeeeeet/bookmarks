const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a username"],
  },
  email: {
    type: String,
    required: [true, "Must provide an email"],
    unique: [true, "User with the email already exists"],
  },
  password: {
    type: String,
    required: [true, "Must provide a password"],
  },
});

// Hash password before saving
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// Method to compare Passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

userSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      user: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

const user = mongoose.model("user", userSchema);

module.exports = user;
