import {
  LEND_BK_DEL_PENDING, LEND_BK_DEL_SUCCESS, LEND_BK_DEL_FAILURE,
  BORROW_BK_DEL_PENDING, BORROW_BK_DEL_SUCCESS, BORROW_BK_DEL_FAILURE
} from '../actions/deleteBooks.js';

let initialState = {
  borrowPending: false,
  borrowSuccess: false,
  lendPending: false,
  lendSuccess: false,
  error: ''
};

export default function deleteBookReducer(state = initialState, action) {
  switch(action.type) {
    case BORROW_BK_DEL_PENDING:
      return {
        ...state,
        borrowPending: true
      }
    case BORROW_BK_DEL_FAILURE:
      return {
        ...state,
        borrowPending: false,
        error: action.payload
      }
    case BORROW_BK_DEL_SUCCESS:
      return {
        ...state,
        borrowPending: false,
        borrowSuccess: true
      }
    case LEND_BK_DEL_PENDING:
      return {
        ...state,
        lendPending: true
      }
    case LEND_BK_DEL_FAILURE:
      return {
        ...state,
        lendPending: false,
        error: action.payload
      }
    case LEND_BK_DEL_SUCCESS:
      return {
        ...state,
        lendPending: false,
        lendSuccess: true
      }

    default:
      return state
  }
}
