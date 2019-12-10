import axios from "axios";

export const FETCH_BOOK = "FETCH_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const ADDING_BOOK_SUCC = "ADDING_BOOK_SUCC";
export const ADDING_BOOK_FAIL = "ADDING_BOOK_FAIL";
export const DELETING_BOOK = "DELETING_BOOK";

export const getBooks = () => {
    dispatch({ type: FETCH_BOOK });
    axios
        .get('https://neighborhood-library-labspt5.netlify.com/books')
        .then(res => dispatch({ type: ADDING_BOOK_SUCC, payload: res.data }))
        .catch(err => dispatch({ type: ADDING_BOOK_FAIL, payload: err}))
}
export const addBook = newBook => dispatch => {
    dispatch({ type: CREATE_BOOK });
    axios
        .post('https://neighborhood-library-labspt5.netlify.com/books', newBook)
        .then(res => dispatch({ type: ADDING_BOOK_SUCC, payload: res.data }))
        .catch(err => dispatch({ type: ADDING_BOOK_FAIL, payload: err }))
}
export const deleteBook = () => dispatch => {
    dispatch({ type: DELETING_BOOK });
    axios 
        .delete('https://neighborhood-library-labspt5.netlify.com/books/:id')
        .then(res => dispatch({type: DELETING_BOOK, payload: res.data}))
        .catch(err => {
            dispatch({type: DELETING_BOOK });
        });
};