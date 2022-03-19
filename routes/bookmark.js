const express = require("express");
const router = express.Router();
const {
  getAllBookmarks,
  getBookmark,
  editBookmark,
  deleteBookmark,
  createBookmark,
} = require("../controllers/bookmark");

router.route("/").get(getAllBookmarks);

module.exports = router;
