import { REGISTER_SUCCESS } from '../actions/types';

const initialState = {
  users: [],
  error: '',
  registerUser: false
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerUser: true,
        users: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
