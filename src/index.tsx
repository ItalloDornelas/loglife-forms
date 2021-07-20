import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyled from "../src/styles/global";
import { BrowserRouter } from "react-router-dom";
import Provider from "../src/provider/";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
