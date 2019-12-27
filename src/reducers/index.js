import { combineReducers } from 'redux';
import { loginAuthReducer, registerAuthReducer } from './authReducer.js';
import { borrowerReducer, lenderReducer } from './lenderAndBorrowReducer.js';
import deleteBookReducer from './deleteBookReducer.js';
import oAuthReducer from './oAuthReducer.js';
import getAvailBooksRed from './getAvailBooksRed.js';

const reducer = combineReducers({
  oAuthReducer,
  loginAuthReducer,
  registerAuthReducer,
  borrowerReducer,
  lenderReducer,
  deleteBookReducer,
  getAvailBooksRed
});

export default reducer;
