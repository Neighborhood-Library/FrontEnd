import { combineReducers } from "redux";
import oAuthReducer from "./oAuthReducer.js";
import {loginAuthReducer,registerAuthReducer} from "./authReducer.js" 

const reducer = combineReducers({
 oAuthReducer,
 loginAuthReducer,
 registerAuthReducer
});

export default reducer;
