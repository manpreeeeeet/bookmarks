import React, { useContext, useState, useEffect } from "react";
import { BookmarkContext } from "../context/ContextProvider";
import { ImBookmarks } from "react-icons/im";

function Tags({ bookmarks, filterBookmarks }) {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const newKeywords = [
      "all",
      ...new Set(
        bookmarks.map((bookmark) => {
          const { keyword } = bookmark;
          return keyword;
        })
      ),
    ];
    setKeywords(newKeywords);
  }, [bookmarks]);

  return (
    <div>
      <br />
      {keywords.map((keyword, index) => {
        return (
          <button
            key={index}
            onClick={() => filterBookmarks(keyword)}
            className="tag-button"
          >
            {keyword}
          </button>
        );
      })}
    </div>
  );
}

function Bookmarks() {
  const { bookmarks } = useContext(BookmarkContext);
  const [shownBookmarks, setShownBookmarks] = useState(bookmarks);
  useEffect(() => {
    setShownBookmarks(bookmarks);
  }, [bookmarks]);

  const filterBookmarks = (tag) => {
    if (tag === "all") {
      setShownBookmarks(bookmarks);
      return;
    }
    const newShownBookmarks = bookmarks.filter((bookmark) => {
      return bookmark.keyword === tag;
    });
    setShownBookmarks(newShownBookmarks);
  };

  return (
    <>
      <div className="container-wrapper">
        <h2 className="main-header">
          <ImBookmarks className="icon" />
          Bookmarks
        </h2>
        <Tags bookmarks={bookmarks} filterBookmarks={filterBookmarks} />
        <div className="grid-container">
          {shownBookmarks.map((bookmarkData) => {
            const id = bookmarkData._id;
            return <Bookmark key={id} {...bookmarkData} />;
          })}
        </div>
      </div>
    </>
  );
}

function Bookmark({ _id, url, title, description, icon, image, keyword }) {
  const cleanUrl = (url) => {
    let newUrl = url.split("//")[1].split("/")[0];
    return newUrl;
  };
  return (
    <section className="grid-item">
      <a href={url} target="_blank">
        <img src={image} className="bookmark-web-snippet" />

        <h3>{title.length > 30 ? title.substring(0, 30) + "..." : title}</h3>
        {description && (
          <p>
            {description.length > 80
              ? description.substring(0, 80) + "..."
              : description}
          </p>
        )}
        <div className="url-container">
          <br />
          <img src={icon} alt="" className="bookmark-icon" />
          <span> {cleanUrl(url)}</span>
        </div>
        <div className="bookmark-tag">{keyword}</div>
      </a>
    </section>
  );
}

export default Bookmarks;