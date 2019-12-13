import {
  BORROW_BOOK_FAILURE,
  BORROW_BOOK_START,
  BORROW_BOOK_SUCCESS,
  BORROW_DASH_FAILURE,
  BORROW_DASH_START,
  BORROW_DASH_SUCCESS,
  //LEND_BOOK is for posting books to lender-collection and LEND_DASH is for gets to display in dashboard
  LEND_BOOK_FAILURE,
  LEND_BOOK_START,
  LEND_BOOK_SUCCESS,
  LEND_DASH_FAILURE,
  LEND_DASH_START,
  LEND_DASH_SUCCESS
} from '../actions/bookActions.js';

const initialBorrowerState = {
  'borrower-wishlist': [],
  adding: false,
  error: {},
  dashIsRetrieving: false,
  dashError: {},
  wishList: []
};

const initialLenderState = {
  'lender-collection': [],
  adding: false,
  error: {},
  dashIsRetrieving: false,
  dashError: {},
  collection: []
};

export function borrowerReducer(state = initialBorrowerState, action) {
  switch (action.type) {
    case BORROW_BOOK_START:
      return {
        adding: action.payload
      };
    case BORROW_BOOK_SUCCESS:
      return {
        adding: false,
        'borrower-wishlist': [...'borrower-wishlist', action.payload]
      };
    case BORROW_BOOK_FAILURE:
      return {
        adding: false,
        error: action.payload
      };
    case BORROW_DASH_START:
      return {
        dashIsRetrieving: action.payload
      };
    case BORROW_DASH_SUCCESS:
      return {
        dashIsRetrieving: false,
        wishList: action.payload
      };
    case BORROW_DASH_FAILURE:
      return {
        dashIsRetrieving: false,
        dashError: action.payload
      };
    default:
      return 'state';
  }
}

export function lenderReducer(state = initialLenderState, action) {
  switch (action.type) {
    case LEND_BOOK_START:
      return {
        adding: action.payload
      };
    case LEND_BOOK_SUCCESS:
      return {
        adding: false,
        'lender-collection': [...'lender-collection', action.payload]
      };
    case LEND_BOOK_FAILURE:
      return {
        adding: false,
        error: action.payload
      };
    case LEND_DASH_START:
      return {
        dashIsRetrieving: action.payload
      };
    case LEND_DASH_SUCCESS:
      return {
        dashIsRetrieving: false,
        collection: action.payload
      };
    case LEND_DASH_FAILURE:
      return {
        dashIsRetrieving: false,
        dashError: action.payload
      };
    default:
      return 'state';
  }
}
