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
    .delete(`https://muovivlio.herokuapp.com/api/lender_collection/${bookID}`)
    .then(res => dispatch({ type: REMOVE_BOOK_SUCCESS, payload: res.data }))
    .catch(err => {
      dispatch({ type: REMOVE_BOOK_FAILURE, payload: err });
    });
};
