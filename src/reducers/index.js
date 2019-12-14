import { combineReducers } from 'redux';
import { loginAuthReducer, registerAuthReducer } from './authReducer.js';
import { borrowerReducer, lenderReducer } from './lenderAndBorrowReducer';
import oAuthReducer from './oAuthReducer.js';

const reducer = combineReducers({
  oAuthReducer,
  loginAuthReducer,
  registerAuthReducer,
  borrowerReducer,
  lenderReducer
});

export default reducer;
