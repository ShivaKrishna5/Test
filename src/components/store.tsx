import Reducer from "./Reducer";
import { createStore } from "redux";

//export const store = createStore(Reducer);

export const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
