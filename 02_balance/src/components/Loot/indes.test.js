import React from "react";
import { shallow } from "enzyme";
import { Loot } from "./";
import { isRender } from "../../utils/tests";

describe("Loot", () => {
  const mockFetch = jest.fn();
  const props = {
    balance: 10,
    bitcoin: { bpi: { USD: { rate: "1,000" } } },
    fetchBitcoin: mockFetch
  };
  const loot = shallow(<Loot {...props} />);

  test("render loot component", () => isRender(loot, "loot"));
  test("render loot title", () => isRender(loot, "loot__title"));

  test("launch fetchBitcoin", () => {
    expect(mockFetch).toHaveBeenCalledTimes(0);
    loot.instance().componentDidMount();
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  test("display header correctly", () => {
    expect(loot.find("h3").text()).toBe("Bitcoin balance: 0.01");
  });
});
