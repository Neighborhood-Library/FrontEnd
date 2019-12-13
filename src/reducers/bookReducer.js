import {
  REMOVE_BOOK,
  REMOVE_BOOK_FAILURE,
  REMOVE_BOOK_SUCCESS,
  TOGGLE_AVAILABILITY
} from '../actions/types';

const initialState = {
  book: [],
  toggleAvailability: false,
  error: '',
  removingBook: false,
  success: false
};

export function bookReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TOGGLE_AVAILABILITY:
      return {
        ...state,
        error: null,
        toggleAvailability: true
      };
    case REMOVE_BOOK:
      return {
        ...state,
        error: null,
        removingBook: true,
        success: false
      };
    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
        removingBook: false,
        error: null,
        success: true
      };
    case REMOVE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
        removingBook: false,
        success: false
      };

    default:
      return state;
  }
}
export default bookReducer;
