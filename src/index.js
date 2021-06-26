import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//State
import ShowsState from "./context/shows/ShowsState";

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>,
  document.getElementById("root")
);

reportWebVitals();
