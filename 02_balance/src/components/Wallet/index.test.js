import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./";
import { isRender } from "../../utils/tests";

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();

  const props = {
    balance: 20,
    onDeposit: mockDeposit,
    onWithdraw: mockWithdraw
  };
  const wallet = shallow(<Wallet {...props} />);
  test("component renders successful", () => isRender(wallet, "wallet"));
  test("title renders successful", () => isRender(wallet, "wallet__title"));
  test("input renders successful", () => isRender(wallet, "wallet__input"));
  test("deposit btn renders properly", () =>
    isRender(wallet, "wallet__depositBtn"));
  test("withdraw renders successful", () =>
    isRender(wallet, "wallet__withdrawBtn"));

  test("display balance from props", () => {
    expect(wallet.find(".balance").text()).toBe("Balance 20");
  });

  test("deposit and withdraw inputs exsist", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("typing into the input", () => {
    const userBalance = "25";
    beforeEach(() =>
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } })
    );

    test("change user balance in state", () => {
      expect(wallet.state().balance).toBe(userBalance - 0);
    });

    describe("add deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"));

      test("deposit is called", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("withdraw event", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));

      test("withdraw is called", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
