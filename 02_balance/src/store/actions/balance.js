import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";

export const setBalance = balance => ({
  type: SET_BALANCE,
  payload: balance
});

export const onDeposit = deposit => ({
  type: DEPOSIT,
  payload: deposit
});

export const onWithdraw = withdraw => ({
  type: WITHDRAW,
  payload: withdraw
});
