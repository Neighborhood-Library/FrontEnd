import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/types';



const initialState = {
    users: [],
    loggedIn: false
  };
  

function authReducer(state = initialState, action) {
  console.log(action)
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggedIn: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedIn: false,
          token: action.payload
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          loggedIn:false,
          error:action.payload
        }
        default:
            return state;
    }
}
export default authReducer;  