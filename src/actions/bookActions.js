import axios from 'axios';

export const BORROW_BOOK_START = 'BORROW_BOOK';
export const BORROW_BOOK_SUCCESS = 'BORROW_BOOK_SUCCESS';
export const  BORROW_BOOK_FAILURE = 'BORROW_BOOK_FAILURE';


export const LEND_BOOK_START = 'LEND_BOOK_START';
export const LEND_BOOK_SUCCESS = 'LEND_BOOK_SUCCESS';
export const LEND_BOOK_FAILURE = 'LEND_BOOK_FAILURE';

export const borrowBook = (book) => async dispatch => {
  dispatch({ type: BORROW_BOOK_START, payload: true });

  await axios.post('https://muovivlio.herokuapp.com/api/borrower-wishlist/', book, {
    withCredentials: true
  })
    .then(res => {
      dispatch({type: BORROW_BOOK_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: BORROW_BOOK_FAILURE, payload: err });
    });
}

export const lendBook = (book) => async dispatch => {
    dispatch({ type: LEND_BOOK_START, payload: true });
  
    await axios.post('https://muovivlio.herokuapp.com/api/lender-collection/', book, {
      withCredentials: true
    })
      .then(res => {
        dispatch({ type: LEND_BOOK_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: LEND_BOOK_FAILURE, payload: err.body });
      });
  }
  