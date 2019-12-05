import {
  REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS
} from '../actions/types';

const initialState = {
  error: '',
  registerUser: false,
  success: false
};

const authReducer = (state = initialState, action) => {
  console.log(action);
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

export default authReducer;
