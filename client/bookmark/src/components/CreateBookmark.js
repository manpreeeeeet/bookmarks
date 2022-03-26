import React, { useContext } from "react";
import { useState } from "react";
import { Tags } from "./Tags";
import { BookmarkContext } from "../context/ContextProvider";

function CreateBookmark() {
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const { bookmarks } = useContext(BookmarkContext);

  const setKeywordHandler = (keyword) => {
    setKeywords(keyword);
  };
  return (
    <div className="div-container">
      <div className="form-container">
        <h4>Create a Bookmark</h4>
        <form className="login-form">
          <label htmlFor="url">Url</label>
          <input
            type="text"
            name="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            name="keywords"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
          />
        </form>
      </div>
      <Tags bookmarks={bookmarks} clickFunction={setKeywordHandler} />
    </div>
  );
}

export default CreateBookmark;
