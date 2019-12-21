import { combineReducers } from 'redux';
import { loginAuthReducer, registerAuthReducer } from './authReducer.js';
import { borrowerReducer, lenderReducer } from './lenderAndBorrowReducer.js';
import deleteBookReducer from './deleteBookReducer.js';
import oAuthReducer from './oAuthReducer.js';

const reducer = combineReducers({
  oAuthReducer,
  loginAuthReducer,
  registerAuthReducer,
  borrowerReducer,
  lenderReducer,
  deleteBookReducer
});

export default reducer;
