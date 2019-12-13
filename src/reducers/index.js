import { combineReducers } from "redux";
import oAuthReducer from "./oAuthReducer.js";
import {loginAuthReducer,registerAuthReducer} from "./authReducer.js" 
import { borrowerReducer, lenderReducer } from "./lenderAndBorrowReducer";

const reducer = combineReducers({
 oAuthReducer,
 loginAuthReducer,
 registerAuthReducer,
 borrowerReducer,
 lenderReducer
});

export default reducer;
