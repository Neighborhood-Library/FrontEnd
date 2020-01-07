import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_PENDING
} from '../actions/userActions';

const initialState = {
  pending: false,
  success: false,
  error: false
}

export default function userReducer(state = initialState, action ) {
  switch (action.type) {
    case UPDATE_USER_PENDING:
      return {
        ...state,
        pending: true
      }
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true
      }
    default:
      return state
  }
}