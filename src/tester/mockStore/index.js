/*
  consolidate 
    mock store
    test data
    http handling
*/

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { history, clone } from "helpers";
import { ToastContainer } from "react-toastify";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { ThemeProvider } from "theme-material";

const saga = createSagaMiddleware();
const middleware = [saga];

export const createMockStore = (state = {}) => {
  const state2 = clone(state);
  return configureStore(middleware)(state2);
};

export const mountComponent =
  (Component) =>
  (mockState = {}, props = {}, ownProps = {}) => {
    const state = clone(mockState);
    const store = createMockStore(state);

    const { container } = render(
      <>
        <Provider store={store}>
          <ToastContainer />
          <ThemeProvider>
            <BrowserRouter>
              <Routes>
              <Route path="*" element={<Component {...props} />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </>
    );

    return { store, container };
  };

export default mountComponent;
