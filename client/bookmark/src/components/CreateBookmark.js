import React from "react";

function CreateBookmark() {
  return (
    <form>
      <label htmlFor="Url">Bookmark Link </label>
      <input type="text" name="Url" />
      <br />
      <label htmlFor="Keyword">Keyword</label>
      <input type="text" name="Keyword" />{" "}
    </form>
  );
}

export default CreateBookmark;
