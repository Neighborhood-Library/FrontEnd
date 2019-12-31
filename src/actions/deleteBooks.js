import axios from 'axios';

export const BORROW_BK_DEL_PENDING = "BORROW_BK_DEL_PENDING";
export const BORROW_BK_DEL_SUCCESS = "BORROW_BK_DEL_SUCCESS";
export const BORROW_BK_DEL_FAILURE = "BORROW_BK_DEL_FAILURE";

export const LEND_BK_DEL_PENDING = "LEND_BK_DEL_PENDING";
export const LEND_BK_DEL_SUCCESS = "LEND_BK_DEL_SUCCESS";
export const LEND_BK_DEL_FAILURE = "LEND_BK_DEL_FAILURE";

export const delBorrowBook = (record_id) => async dispatch => {
  dispatch({ type: BORROW_BK_DEL_PENDING, payload: true });

  await axios
    .delete(`${process.env.REACT_APP_REQ_URL}/api/borrower-wishlist/${record_id}`, 
    {withCredentials: true})
    .then(() => {
      dispatch({ type: BORROW_BK_DEL_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: BORROW_BK_DEL_FAILURE, payload: err.body });
    });
};

export const delLendBook = (record_id) => async dispatch => {
  dispatch({ type: LEND_BK_DEL_PENDING, payload: true });

  await axios
    .delete(`${process.env.REACT_APP_REQ_URL}/api/lender-collection/${record_id}`, 
    {withCredentials: true})
    .then(() => {
      dispatch({ type: LEND_BK_DEL_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LEND_BK_DEL_FAILURE, payload: err.body });
    });
};