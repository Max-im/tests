import { FETCH_BITCOIN } from "../actions/constants";

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.payload;

    default:
      return state;
  }
};
