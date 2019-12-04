import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import oAuthReducer from "./oAuthReducer.js";

const reducer = combineReducers({
 authReducer,
 oAuthReducer
});

export default reducer;