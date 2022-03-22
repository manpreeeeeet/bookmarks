const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  const isMatch = bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const user = mongoose.model("user", userSchema);

module.exports = user;
