import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";
import { setBalance, onDeposit, onWithdraw } from "./balance";

test("setting balance", () => {
  const balance = 0;
  const expectedAction = { type: SET_BALANCE, payload: balance };
  expect(setBalance(balance)).toEqual(expectedAction);
});

test("should increace a balance", () => {
  const deposit = 10;
  const expectedAction = { type: DEPOSIT, payload: deposit };
  expect(onDeposit(deposit)).toEqual(expectedAction);
});

test("should withdrow a balance", () => {
  const withdraw = 10;
  const expectedAction = { type: WITHDRAW, payload: withdraw };
  expect(onWithdraw(withdraw)).toEqual(expectedAction);
});
