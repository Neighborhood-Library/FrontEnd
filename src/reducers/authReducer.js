import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/types';

import  {
  REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS
} from '../actions/types';

const initialState = {
    users: [],
    loggedIn: false,
    error: '',
    registerUser: false,
    success: false
  };
  

export function loginAuthReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggedIn: false,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedIn: true
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          loggedIn: false,
          error:action.payload
        }
        default:
            return state;
    }
}
 




export function registerAuthReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: null,
        registerUser: true,
        success: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        registerUser: false,
        success: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        registerUser: null,
        success: false
      };

    default:
      return state;
  }
};

