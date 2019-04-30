import React from "react";

export const isRender = (component, attr) => {
  expect(component.find(`[data-test="${attr}"]`).exists()).toBe(true);
};
