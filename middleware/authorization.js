const authenticationerror = require("../errors/AUTHENTICATION_ERROR");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new authenticationerror("Authentication Failed");
  }
  const token = authHeader.split(" ")[1];
  // Verify token
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.user };
    next();
  } catch (e) {
    throw new authenticationerror("Authentication Failed");
  }
};

module.exports = authenticateUser;
