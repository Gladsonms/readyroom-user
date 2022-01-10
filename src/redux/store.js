import { combineReducers } from "redux";
import { authReducer } from "./Reducers/auth";

//combine multipler reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
