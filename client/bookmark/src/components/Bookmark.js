import React, { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../context/ContextProvider";
import { ImBookmarks } from "react-icons/im";
import { Tags } from "./Tags";

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
      return bookmark.keywords.includes(tag);
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
        <Tags bookmarks={bookmarks} clickFunction={filterBookmarks} />
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

function Bookmark({ _id, url, title, description, icon, image, keywords }) {
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
        {keywords.map((keyword) => {
          return <div className="bookmark-tag">{keyword}</div>;
        })}
      </a>
    </section>
  );
}

export default Bookmarks;
