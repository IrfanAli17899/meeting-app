import { createStore, applyMiddleware } from "redux";
import thunk  from "redux-thunk"
import rootReducer from "./Reducers/Reducer";

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;