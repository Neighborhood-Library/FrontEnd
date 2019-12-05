import {
    UPDATE_TITLE,
    FETCH_BOOK,
    ADDING_BOOK_SUCC,
    ADDING_BOOK_FAIL,
    DELETING_BOOK
} from '../../actions';
import { isNull } from 'util';

const initialState = {
    title: "This Is {Insert Name} Book List",
    book: [],
    fetchingBook: false,
    addingBook: false,
    updatingBook: false,
    deletingBook: false,
    error: isNull
};

function reducer( state = initialState, action) {
    switch (action.type) {
        case UPDATE_TITLE: 
            return {
                ...state,
                title: action.payload
            };
        case FETCH_BOOK: 
            return {
                ...state,
                error:'',
                addingBook: false
            };
        case ADDING_BOOK_SUCC:
            return {
                ...state,
                error:isNull
            }
        case ADDING_BOOK_FAIL:
            return {
                ...state,
                addingBook: false,
                error: action.payload
            }
        case DELETING_BOOK:
            return {
                ...state,
                book: state.book.filter(book => book.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;