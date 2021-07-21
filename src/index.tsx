import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyled from "../src/styles/global";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Provider from "../src/provider/";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <GlobalStyled />
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
