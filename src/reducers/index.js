import { combineReducers } from 'redux';
import { loginAuthReducer, registerAuthReducer } from './authReducer.js';
import { bookReducer } from './bookReducer';
import oAuthReducer from './oAuthReducer.js';

const reducer = combineReducers({
  oAuthReducer,
  loginAuthReducer,
  registerAuthReducer,
  bookReducer
});

export default reducer;
