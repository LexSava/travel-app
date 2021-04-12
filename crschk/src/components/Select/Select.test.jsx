import React from "react";
import { Provider } from "react-redux";
import renderer, { act } from "react-test-renderer";
global.fetch = require("node-fetch");
import rootReducer from "../../utils/rootReducer";
import "babel-polyfill";

import Select from "./Select";
import { createStore } from "redux";

describe("Search", () => {
  const renderComp = () =>
    renderer.create(
      <Provider store={store}>
        <Select />
      </Provider>
    );
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });
  const store = createStore(rootReducer);

  it("Should render search with img", () => {
    const tree = renderComp().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should set state on select change", async () => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    const wrapper = renderComp();
    const select = wrapper.root.findByType("select");
    act(() => select.props.onChange({ target: { value: "test" } }));
    expect(store.getState().locale).toBe("test");
  });
});
