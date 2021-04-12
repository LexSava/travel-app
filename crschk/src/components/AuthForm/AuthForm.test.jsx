import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import rootReducer from "../../utils/rootReducer";
import "babel-polyfill";

import AuthForm from "./AuthForm";
import { createStore } from "redux";

describe("Auth form", () => {
  it("Should render signup form", () => {
    const tree = renderer
      .create(
        <Provider store={createStore(rootReducer)}>
          <AuthForm isSignup />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render signin form", () => {
    const tree = renderer
      .create(
        <Provider store={createStore(rootReducer)}>
          <AuthForm />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
