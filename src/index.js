import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "store/store"; //explicitly call, don't have in index

import "scss/index.scss";
import "./index.css";

import InitState from "components/initState/initState";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "theme-material";

//import App from './App'; (called through Router)
import Router from "./router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <ThemeProvider>
        <InitState />
        {/* APP IS CALLED IN ROUTER*/}
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
