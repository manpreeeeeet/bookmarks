import React, { useEffect, useState } from "react";
import axios from "axios";
// Base url
import { baseUrl } from "../info";
const BookmarkContext = React.createContext();
function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = async () => {
    const Bookmarks = await axios.get(`${baseUrl}/bookmark`);
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
