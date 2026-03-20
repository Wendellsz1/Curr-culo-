import { createStore } from "redux";
import contadorReducer from "./reducer";

const store = createStore(contadorReducer);

export default store;