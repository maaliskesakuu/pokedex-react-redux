import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

test("The <App> structure", () => {
  const wrap = shallow(<App></App>);
  // mount shows a tree in the terminal
  // const wrap = mount(<App></App>);
  const container = wrap.find(".container");
  expect(container).toHaveLength(1)
  const routes = wrap.find("Route");
  // fails
  // expect(routes.length).toEqual(0);
  // passes
  expect(routes.length).toEqual(2);
  console.log(wrap.debug());
});