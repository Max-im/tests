import React from "react";
import { shallow } from "enzyme";
import { isRender } from "../../utils/tests";
import App from "./";

describe("App", () => {
  const app = shallow(<App />);

  test("render successful", () => isRender(app, "app"));
  test("render app title", () => isRender(app, "app__title"));
  test("Wallet exists", () => isRender(app, "app__wallet"));
  test("Loot exists", () => isRender(app, "app__loot"));
});
