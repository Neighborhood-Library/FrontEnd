import {
    BORROW_BOOK_FAILURE,
    BORROW_BOOK_SUCCESS,
    BORROW_BOOK_START
} from "../actions/bookActions.js";
import {
    LEND_BOOK_FAILURE,
    LEND_BOOK_SUCCESS,
    LEND_BOOK_START
} from "../actions/bookActions.js";

const initialBorrowerState = {
    'borrower-wishlist': [],
    adding: false,
    error: {}
}

const initialLenderState = {
    'lender-collection': [],
    adding: false,
    error: {}
}

export function borrowerReducer(state = initialBorrowerState, action) {
    switch (action.type) {
        case BORROW_BOOK_START:
            return {
                adding: action.payload
            }
        case BORROW_BOOK_SUCCESS:
            return {
                adding: false,
                    'borrower-wishlist': [...'borrower-wishlist', action.payload]
            }
        case BORROW_BOOK_FAILURE:
            return {
                adding: false,
                    error: action.payload
            }
            default:
                return 'state'
    }
}

export function lenderReducer(state = initialLenderState, action) {
    switch (action.type) {
        case LEND_BOOK_START:
            return {
                adding: action.payload,
            }
        case LEND_BOOK_SUCCESS:
            return {
                adding: false,
                    'lender-collection': [...'lender-collection', action.payload]
            }
        case LEND_BOOK_FAILURE:
            return {
                adding: false,
                    error: action.payload
            }
            default:
                return 'state'
    }
}