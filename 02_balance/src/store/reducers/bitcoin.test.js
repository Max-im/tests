import bitcoinReducer from "./bitcoin";
import { FETCH_BITCOIN } from "../actions/constants";

describe("Bitcoin reducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };
  test("set fetched bitcoin data", () => {
    expect(
      bitcoinReducer(undefined, { type: FETCH_BITCOIN, payload: bitcoinData })
    ).toEqual(bitcoinData);
  });
});
