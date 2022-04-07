import React, { useEffect, useState } from "react";

export function Tags({ bookmarks, clickFunction }) {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const mySet = new Set();
    const myKeywordsArr = bookmarks.map((bookmark) => {
      const { keywords } = bookmark;
      return keywords;
    });
    myKeywordsArr.forEach((arr) => {
      arr.forEach((keyword) => {
        mySet.add(keyword);
      });
    });

    const newKeywords = ["all", ...mySet];

    setKeywords(newKeywords);
  }, [bookmarks]);

  return (
    <div>
      <br />
      {keywords.map((keyword, index) => {
        return (
          <button
            type="button"
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
