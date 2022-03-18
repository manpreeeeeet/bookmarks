const { INTERNAL_SERVER_ERROR } = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({ msg: "Internal server error occured" });
  next();
};
module.exports = errorHandler;
