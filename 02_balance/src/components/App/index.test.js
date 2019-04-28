import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { isRender } from "../../utils/tests";
import store from "../../store/store";
import App from "./";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  test("render successful", () =>
    isRender(
      <Provider store={store}>
        <App />
      </Provider>
    ));

  test("Wallet exists", () => {
    expect(app.find("[data-test='app-wallet']").exists()).toBe(true);
  });

  test("Loot exists", () => {
    expect(app.find("[data-test='app-loot']").exists()).toBe(true);
  });
});
