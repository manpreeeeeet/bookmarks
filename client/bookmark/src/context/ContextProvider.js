import React, { useEffect, useState } from "react";
import axios from "axios";
// Base url
const baseUrl = "http://localhost:5000/";
const BookmarkContext = React.createContext();
function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = async () => {
    const Bookmarks = await axios.get(baseUrl);
    const { data } = Bookmarks.data;
    setBookmarks(data);
  };
  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <BookmarkContext.Provider value={{ bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export { BookmarkContext, BookmarkProvider };
