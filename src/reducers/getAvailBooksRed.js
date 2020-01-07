import {
  BOOK_AVAIL_FAILURE,
  BOOK_AVAIL_PENDING,
  BOOK_AVAIL_SUCCESS
} from '../actions/getAvailBooks';

const initialState = {
  availPending: false,
  books: [],
  error: ''
};

export default function getAvailBooksRed(state = initialState, action) {
  switch (action.type) {
    case BOOK_AVAIL_PENDING:
      return {
        ...state,
        availPending: true
      }
    case BOOK_AVAIL_SUCCESS:
      return {
        ...state,
        availPending: false,
        books: action.payload
      }
    case BOOK_AVAIL_FAILURE:
      return {
        ...state,
        availPending: false,
        error: action.payload
      }
    default:
      return state;
  }
}