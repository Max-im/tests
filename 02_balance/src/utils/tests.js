import React from "react";
import renderer from "react-test-renderer";

export const isRender = component => {
  const c = renderer.create(component);
  expect(c.toJSON()).toMatchSnapshot();
};
