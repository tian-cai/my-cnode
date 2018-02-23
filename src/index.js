import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./modules/example/App.jsx";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
