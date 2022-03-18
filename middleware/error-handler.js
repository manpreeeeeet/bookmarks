const { INTERNAL_SERVER_ERROR } = require("http-status-codes");
const errorHandler = async (err, req, res, next) => {
  console.log(err);
  res.status(INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
};
