const WebsiteData = require("../utils/metaData");
const Bookmark = require("../models/bookmark");
const getAllBookmarks = async (req, res) => {
  const allBookmarks = await Bookmark.find();
  res.status(200).json({ msg: "all bookmarks", data: allBookmarks });
};

const getBookmark = async (req, res) => {
  res.status(200).json({ msg: "get single bookmark" });
};

const editBookmark = async (req, res) => {
  res.status(200).json({ msg: "edit single bookmark" });
};

const deleteBookmark = async (req, res) => {
  await Bookmark.deleteMany({});
  res.status(200).json({ msg: "delete single bookmark" });
};

const createBookmark = async (req, res) => {
  const { url, keyword } = req.body;
  if (!url) {
    throw Error("No url provided");
  }
  const BookmarkData = await WebsiteData.get(url);
  BookmarkData.keyword = keyword;
  const newBookmark = await Bookmark.create({ ...BookmarkData });

  res.status(200).json({ msg: "create a bookmark", data: newBookmark });
};

module.exports = {
  getAllBookmarks,
  getBookmark,
  editBookmark,
  deleteBookmark,
  createBookmark,
};
