import axios from 'axios';

export const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUser = newUser => async dispatch => {
  dispatch({ type: UPDATE_USER_PENDING });

  await axios
    .put(`${process.env.REACT_APP_REQ_URL}/`, {withCredentials: true})
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err.body })
    });
}