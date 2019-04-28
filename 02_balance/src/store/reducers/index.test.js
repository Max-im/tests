import rootReducer from "./";

describe("root reducer", () => {
  test("init root reducer", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
