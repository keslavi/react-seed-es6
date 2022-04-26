/*
  consolidate 
    mock store
    test data
    http handling
*/

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history, clone } from "helpers";
import { ToastContainer } from "react-toastify";
import configureStore from "redux-mock-store";

const middleware = [];

export const createMockStore=(state={}) => { 
  const state2=clone(state);
  return configureStore(middleware)(state2);
}

export const mountComponent =
  (Component) =>
  (mockState = {}, props = {}, ownProps = {}) => {
    const state = clone(state);
    const store = createMockStore(state);

    const { container } = render(
      <>
        <Provider store={store}>
          <ToastContainer />
          <Router history={history}>
            <Component
              {...props}
              match={{ params: ownProps }}
              isExact={true}
              path=""
              url=""
            />
          </Router>
        </Provider>
      </>
    );

    return {store,container};
  };

  export default mountComponent;

