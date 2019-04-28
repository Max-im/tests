import { SET_BALANCE, DEPOSIT, WITHDRAW } from "../actions/constants";
import { bake_cookie, read_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const initState = 0;

export default (state = initState, action) => {
  let balance;

  switch (action.type) {
    case SET_BALANCE:
      balance = action.payload;
      break;

    case DEPOSIT:
      balance = state + action.payload;
      break;

    case WITHDRAW:
      balance = state - action.payload;
      break;

    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE)) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};
