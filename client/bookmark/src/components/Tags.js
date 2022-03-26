import React, { useEffect, useState } from "react";

export function Tags({ bookmarks, clickFunction }) {
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
            onClick={() => clickFunction(keyword)}
            className="tag-button"
          >
            {keyword}
          </button>
        );
      })}
    </div>
  );
}
