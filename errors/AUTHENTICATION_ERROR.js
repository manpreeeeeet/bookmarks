const API_ERROR = require("./API_ERROR");
const { UNAUTHORIZED } = require("http-status-codes");

class AUTHENTICATION_ERROR extends API_ERROR {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED;
  }
}
module.exports = AUTHENTICATION_ERROR;
