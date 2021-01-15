import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";

let store = createStore(reducer, applyMiddleware());

export default store;
