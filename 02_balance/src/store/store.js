import { createStore } from "redux";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialstate = {};

export default createStore(rootReducer, initialstate, applyMiddleware(thunk));
