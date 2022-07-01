import { combineReducers } from "redux";
import apiData from "./Reducer";

const mainData = combineReducers(apiData);
export default mainData;