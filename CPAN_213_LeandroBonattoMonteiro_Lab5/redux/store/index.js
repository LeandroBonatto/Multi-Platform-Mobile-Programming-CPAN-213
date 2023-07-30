import { createStore } from "redux";
import reducers from "../reducers";
import rootReducer from '../reducers'

const store = createStore(reducers)

export default store;