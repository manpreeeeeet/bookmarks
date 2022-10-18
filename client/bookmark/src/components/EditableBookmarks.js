import React, { useContext } from "react";
import { BookmarkContext } from "../context/ContextProvider";
import Admin from "../pages/Admin";
import axios from "axios";
import { baseUrl } from "../info";

export function EditableBookmarks() {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <>
      <Admin />
      <div className="grid-container">
        {bookmarks.map((bookmark) => {
          return <EditableBookmark {...bookmark} key={bookmark._id} />;
        })}
      </div>
    </>
  );
}

function EditableBookmark({
  _id,
  url,
  title,
  description,
  icon,
  image,
  keyword,
  setShownBookmarks,
}) {
  return (
    <>
      <section className="grid-item">
        <div>
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
          </div>
          <div className="bookmark-tag">{keyword}</div>
          <button>Edit</button>
          <button
            onClick={async () => {
              const token = localStorage.getItem("token");
              const config = {
                headers: { Authorization: "Bearer " + token },
              };
              await axios.delete(baseUrl + "bookmark/" + _id, config);
            }}
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
}
