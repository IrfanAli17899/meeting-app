import { createStore } from "redux";
import rootReducer from "./Reducers/Reducer";

const Store = createStore(rootReducer);

export default Store;