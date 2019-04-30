import axios from "axios";
import { FETCH_BITCOIN } from "./constants";

export const fetchBitcoin = () => dispatch => {
  return axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => dispatch({ type: FETCH_BITCOIN, payload: res.data }))
    .catch(err => console.log(err));
};
