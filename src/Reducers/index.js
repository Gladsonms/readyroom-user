import { combineReducers } from "redux";
import { authReducer } from "./auth";

//combine multipler reducer
const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
