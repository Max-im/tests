import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./";
import { isRender } from "../../utils/tests";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);

  /*
   * render the component
   */
  test("renders correctly", () => isRender(<App />));

  /*
   * check state structure
   */
  test("init state of empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  /*
   * Add item into gifts arr when clicking to add gift btn
   */
  describe("Clicking 'add gift' button", () => {
    const id = 1;

    beforeEach(() => app.find(".btn-add").simulate("click"));
    afterEach(() => app.setState({ gifts: [] }));

    //Add item into gifts arr
    test("add item into gifts arr", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    // Render new element
    test("render new element", () => {
      expect(app.find(".gift-list").children().length).toBe(1);
    });

    // creates a gift component
    test("create gift component", () => {
      expect(app.find("Gifts").exists()).toBe(true);
    });

    /*
     * Removing a gift
     */
    describe("Removing a gift", () => {
      beforeEach(() => app.instance().removeGift(id));

      test("removes gift from the state", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
