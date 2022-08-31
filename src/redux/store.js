import {createStore, applyMiddleware} from "redux";
import rootReducer from "./root.Reducer";
import {logger} from "redux-logger/src";

const middleware = [logger]
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store