import moxios from "moxios";
import { fetchBitcoin } from "./bitcoin";
import store from "../store";

describe("fetch data from api", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const expectedResponse = { body: { bpi: "bitcoin price index" } };
  const { dispatch, getState } = store;
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

  moxios.stubRequest(url, { status: 200, response: expectedResponse });

  test("async fetching bitcoins data", () => {
    return dispatch(fetchBitcoin()).then(() => {
      expect(expectedResponse).toEqual(getState().bitcoin);
    });
  });
});
