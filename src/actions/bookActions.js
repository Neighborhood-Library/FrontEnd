import axios from 'axios';
import {
  REMOVE_BOOK,
  REMOVE_BOOK_FAILURE,
  REMOVE_BOOK_SUCCESS,
  TOGGLE_AVAILABILITY
} from './types';

export const toggleAvailibilty = param => dispatch => {
  dispatch({
    type: TOGGLE_AVAILABILITY,
    payload: param
  });
  // axios
  //   .put('https://muovivlio.herokuapp.com/api/lender_collection/:id')
  //   .then(res => dispatch({}))
};

export const removeBook = bookID => dispatch => {
  dispatch({
    type: REMOVE_BOOK
  });
  axios
    .delete(`${process.env.REACT_APP_REQ_URL}/api/lender_collection/${bookID}`)
    .then(res => dispatch({ type: REMOVE_BOOK_SUCCESS, payload: res.data }))
    .catch(err => {
      dispatch({ type: REMOVE_BOOK_FAILURE, payload: err });
    });
};

export const BORROW_BOOK_START = 'BORROW_BOOK_START';
export const BORROW_BOOK_SUCCESS = 'BORROW_BOOK_SUCCESS';
export const BORROW_BOOK_FAILURE = 'BORROW_BOOK_FAILURE';
export const BORROW_DASH_START = 'BORROW_DASH_START';
export const BORROW_DASH_SUCCESS = 'BORROW_DASH_SUCCESS';
export const BORROW_DASH_FAILURE = 'BORROW_DASH_FAILURE';

export const LEND_BOOK_START = 'LEND_BOOK_START';
export const LEND_BOOK_SUCCESS = 'LEND_BOOK_SUCCESS';
export const LEND_BOOK_FAILURE = 'LEND_BOOK_FAILURE';
export const LEND_DASH_START = 'LEND_DASH_START';
export const LEND_DASH_SUCCESS = 'LEND_DASH_SUCCESS';
export const LEND_DASH_FAILURE = 'LEND_DASH_FAILURE';

// add book to user borrow wishlist
export const borrowBook = book => async dispatch => {
  dispatch({ type: BORROW_BOOK_START, payload: true });

  await axios
    .post(`${process.env.REACT_APP_REQ_URL}/api/borrower-wishlist/`, book, {
      withCredentials: true
    })
    .then(res => {
      dispatch({ type: BORROW_BOOK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: BORROW_BOOK_FAILURE, payload: err });
    });
};

// add books to user lender collection
export const lendBook = book => async dispatch => {
  dispatch({ type: LEND_BOOK_START, payload: true });

  await axios
    .post(`${process.env.REACT_APP_REQ_URL}/api/lender-collection/`, book, {
      withCredentials: true
    })
    .then(res => {
      dispatch({ type: LEND_BOOK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LEND_BOOK_FAILURE, payload: err.body });
    });
};

// Gets current user information from cookie
const getCurrUser = async () => {
  return await axios
    .get(`${process.env.REACT_APP_REQ_URL}/auth/current_user`, {
      withCredentials: true
    })
    .then(res => {
      console.log(res.data.user);

      if (res.data.user !== undefined) {
        return res.data.user[0].id;
      } else {
        return;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

// Get books from lender collection
export const lendBookDashboard = () => async dispatch => {
  dispatch({ type: LEND_DASH_START, payload: true });

  const currUserID = await getCurrUser();

  if (currUserID) {
    await axios
      .get(
        `${process.env.REACT_APP_REQ_URL}/api/lender-collection/${currUserID}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        dispatch({ type: LEND_DASH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LEND_DASH_FAILURE, payload: err.body });
      });
  }
};

export const borrowBookDashboard = () => async dispatch => {
  dispatch({ type: BORROW_DASH_START, payload: true });

  const currUserID = await getCurrUser();

  if (currUserID) {
    await axios
      .get(
        `${process.env.REACT_APP_REQ_URL}/api/borrower-wishlist/${currUserID}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        dispatch({ type: BORROW_DASH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: BORROW_DASH_FAILURE, payload: err.body });
      });
  }
  dispatch({ type: BORROW_DASH_START, payload: false });

};
