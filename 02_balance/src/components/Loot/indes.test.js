import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Loot } from "./";
import { isRender } from "../../utils/tests";
Enzyme.configure({ adapter: new Adapter() });

describe("Loot", () => {
  const mockFetch = jest.fn();
  const props = {
    balance: 10,
    bitcoin: { bpi: { USD: { rate: "1,000" } } },
    fetchBitcoin: mockFetch
  };
  const loot = shallow(<Loot {...props} />);

  test("render", () => isRender(loot));

  test("launch fetchBitcoin", () => expect(mockFetch).toHaveBeenCalled());

  test("display header correctly", () => {
    expect(loot.find("h3").text()).toBe("Bitcoin balance: 0.01");
  });
});
