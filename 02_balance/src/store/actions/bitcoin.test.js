import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { FETCH_BITCOIN } from "./constants";
import { fetchBitcoin } from "./bitcoin";

const createMockStore = configMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponce = { body: { bpi: "bitcoin price index" } };

fetchMock.get(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  mockResponce
);

test("async fetching bitcoins data", () => {
  const expectedActions = [{ type: FETCH_BITCOIN, payload: mockResponce.body }];
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
