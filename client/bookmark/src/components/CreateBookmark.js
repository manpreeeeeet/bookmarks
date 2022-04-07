import React, { useContext, useState } from "react";
import { Tags } from "./Tags";
import { BookmarkContext } from "../context/ContextProvider";
import axios from "axios";
import Admin from "../pages/Admin";

function CreateBookmark() {
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const { bookmarks } = useContext(BookmarkContext);

  const setKeywordHandler = (keyword) => {
    setKeywords(keywords + "," + keyword);
  };

  const setUrlHandler = (url) => {
    setUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: "Bearer " + token },
    };
    const data = {
      url,
      keywords: keywords,
    };
    setUrl("");
    setKeywords("");
    try {
      const res = await axios.post(
        "http://localhost:5000/bookmark/a",
        data,
        config
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Admin />
      <div className="form-container">
        <h4>Create a Bookmark</h4>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-btn">
            Create
          </button>
          <Tags bookmarks={bookmarks} clickFunction={setKeywordHandler} />
        </form>
      </div>
    </>
  );
}

export default CreateBookmark;
