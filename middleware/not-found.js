const { NOT_FOUND } = require("http-status-codes");
const notFound = (req, res) => {
  res.status(NOT_FOUND).send("Page not found");
};

module.exports = notFound;
