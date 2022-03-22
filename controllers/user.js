const User = require("../models/user");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("Incomplete credentials");
  }
  const newUser = await User.create({ name, email, password });
  res.status(200).json({ msg: { newUser } });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Invalid Credentials");
  }
  // Find the user
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new Error("Invalid Credentials");
  }
  // Compare the password
  const isPasswordCorrect = await existingUser.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid Credentials");
  }

  // Create JWT
  const token = existingUser.createJWT();
  res.status(200).json({ token });
};

module.exports = { signUp, login };
