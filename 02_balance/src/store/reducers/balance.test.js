import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";
import balanceReducer from "./balance";
import balanceReducer2 from "./balance";

describe("balanceReducer", () => {
  describe("initialazing", () => {
    const balance = 10;

    test("set balance", () => {
      expect(
        balanceReducer(undefined, { type: SET_BALANCE, payload: balance })
      ).toBe(balance);
    });

    describe("refresh page", () => {
      test("read a balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toBe(balance);
      });
    });
  });

  test("deposit balance", () => {
    const deposit = 10;
    const initState = 5;
    expect(balanceReducer(initState, { type: DEPOSIT, payload: deposit })).toBe(
      deposit + initState
    );
  });

  test("withdraw balance", () => {
    const withdraw = 10;
    const initState = 50;
    expect(
      balanceReducer(initState, { type: WITHDRAW, payload: withdraw })
    ).toBe(initState - withdraw);
  });
});
