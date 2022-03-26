const express = require("express");
const router = express.Router();
const {
  getAllBookmarks,
  createBookmark,
  deleteBookmark,
  editBookmark,
  getBookmark,
} = require("../controllers/bookmark");
const authenticate = require("../middleware/authorization");

router.route("/").get(getAllBookmarks);
router.use("/:bookmarkID", authenticate);
router
  .route("/:bookmarkID")
  .get(getBookmark)
  .post(createBookmark)
  .delete(deleteBookmark)
  .patch(editBookmark);
module.exports = router;
