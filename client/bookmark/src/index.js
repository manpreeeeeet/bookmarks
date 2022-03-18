import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BookmarkProvider } from "./context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
