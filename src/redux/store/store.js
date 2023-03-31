import { createStore } from 'redux';
import allReducers from "../reducers/allReducer"

export default createStore(
  allReducers
  );