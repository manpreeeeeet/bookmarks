const express = require("express");
const router = express.Router();
const {
  getAllBookmarks,
  getBookmark,
  editBookmark,
  deleteBookmark,
  createBookmark,
} = require("../controllers/bookmark");

router.route("/").get(getAllBookmarks).post(createBookmark);
router
  .route("/:bookmarkID")
  .get(getBookmark)
  .patch(editBookmark)
  .delete(deleteBookmark);

module.exports = router;
