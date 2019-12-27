import axios from 'axios';

export const BOOK_AVAIL_PENDING = 'BOOK_AVAIL_PENDING';
export const BOOK_AVAIL_SUCCESS = 'BOOK_AVAIL_SUCCESS';
export const BOOK_AVAIL_FAILURE = 'BOOK_AVAIL_FAILURE';

// add book to user borrow wishlist
export const getAvailBooks = book_id => async dispatch => {
  dispatch({ type: BOOK_AVAIL_PENDING, payload: true });

  console.log('action book id ***', book_id);

  await axios
    .get(`${process.env.REACT_APP_REQ_URL}/api/lender-collection/book/${book_id}`, {
      withCredentials: true
    })
    .then(res => {
      dispatch({ type: BOOK_AVAIL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: BOOK_AVAIL_FAILURE, payload: err });
    });
};