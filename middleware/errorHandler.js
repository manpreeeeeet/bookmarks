const { INTERNAL_SERVER_ERROR } = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || INTERNAL_SERVER_ERROR,
    msg: err.message || "Something Went wrong",
  };
  console.log(customError.msg);
  res.status(customError.statusCode).json({ msg: customError.msg });
  next();
};
module.exports = errorHandler;
