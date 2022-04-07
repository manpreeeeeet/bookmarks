const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
  image: {
    type: String,
  },
  keywords: {
    type: [String],
  },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
