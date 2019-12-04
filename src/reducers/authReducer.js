import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/types';



const initialState = {
    users: [],
    logginIn: false
  };
  

function authReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          loggingIn:false,
          error:action.payload
        }
        default:
            return state;
    }
}
export default authReducer;  