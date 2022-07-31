import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import combineReducer from "./combineReducers";
import reducer from "./reducer";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
    );

export default store;