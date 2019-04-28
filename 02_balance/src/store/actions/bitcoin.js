import { FETCH_BITCOIN } from "./constants";

export const fetchBitcoin = () => dispatch => {
  return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_BITCOIN, payload: data });
    })
    .catch(err => console.log(err));
};
