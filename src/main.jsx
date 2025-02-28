import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./app"; //loaded in router
import Router from "./router";
//import { useStore } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@/components/spinner";
import "./scss/index.scss";
import { ThemeProvider } from "./theme-material";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode> */}
    <Spinner />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {/* <Provider store={useStore}> */}
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    {/* </Provider> */}
    {/* </React.StrictMode> */}
  </>
);
