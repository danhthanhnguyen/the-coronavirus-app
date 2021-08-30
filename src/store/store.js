import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import covidReducer from "../reducers/covid";

const reducer = combineReducers({
  covid: covidReducer
});

export default createStore(reducer, applyMiddleware(thunk));