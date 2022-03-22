class API_ERROR extends Error {
  constructor(message) {
    super(message);
  }
}
module.exports = API_ERROR;
