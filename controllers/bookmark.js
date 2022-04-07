const WebsiteData = require("../utils/metaData");
const Bookmark = require("../models/bookmark");
const valid_url = require("valid-url");
const getAllBookmarks = async (req, res) => {
  const allBookmarks = await Bookmark.find();
  res.status(200).json({ msg: "all bookmarks", data: allBookmarks });
};

const getBookmark = async (req, res) => {
  res.status(200).json({ msg: "get single bookmark" });
};

const editBookmark = async (req, res) => {
  const { bookmarkID } = req.params;
  const { keyword } = req.body;
  const updatedBookmark = await Bookmark.findByIdAndUpdate(
    { keyword },
    { new: true }
  );
  res.status(200).json({ msg: updatedBookmark });
};

const deleteBookmark = async (req, res) => {
  const { bookmarkID } = req.params;
  const deletedBookmark = await Bookmark.deleteOne({ _id: bookmarkID });
  res.status(200).json({ msg: deletedBookmark });
};

const createBookmark = async (req, res) => {
  const { url, keywords } = req.body;
  if (!url || !valid_url.is_uri(url)) {
    throw Error("URL NOT VALID");
  }
  const keywordArr = keywords.split(",");
  const BookmarkData = await WebsiteData.get(url);
  BookmarkData.keywords = keywordArr;
  const newBookmark = await Bookmark.create({ ...BookmarkData });

  res.status(200).json({ msg: "create a bookmark", data: newBookmark });
};

module.exports = {
  getAllBookmarks,
  editBookmark,
  deleteBookmark,
  createBookmark,
  getBookmark,
};
