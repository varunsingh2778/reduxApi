import mainData from "./Reducers/Reducer";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(mainData,applyMiddleware(thunk));
// console.log(store)
export default store;