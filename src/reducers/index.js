import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import oAuthReducer from './oAuthReducer.js';

export default combineReducers({
  authReducer,
  oAuthReducer
});
