import React from "react";
import Enzyme, { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Gifts from "./";
Enzyme.configure({ adapter: new Adapter() });

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gifts {...props} />);

  /*
   * Render correctly
   */
  test("render correctly", () => {
    const component = renderer.create(<Gifts />).toJSON();
    expect(component).toMatchSnapshot();
  });

  /*
   * Init person and present in state
   */
  test("Init person and present in state", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  /*
   * Typing into person input
   */
  describe("Fill out person input", () => {
    const person = "Uncle";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    test("updates the person in state", () => {
      expect(gift.state().person).toBe(person);
    });
  });

  /*
   * Typing into present input
   */
  describe("Fill out person input", () => {
    const present = "Golf club";
    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });

    test("updates the present in state", () => {
      expect(gift.state().present).toBe(present);
    });
  });

  /*
   * Clicking a remove gift btn
   */
  describe("Clicking a remove gift btn", () => {
    beforeEach(() => gift.find(".btn-remove").simulate("click"));

    // remove btn click callback
    test("remove btn click callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
