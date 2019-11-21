import axios from 'axios';
import { FETCH_USER, REGISTER_SUCCESS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const register = credentials => {
  return async dispatch => {
    try {
      const res = await axios.post(
        'https://muovivlio.herokuapp.com/auth/register',
        credentials
      );
      console.log('res', res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user.id);
    } catch (err) {
      console.errro('err', err);
    }
  };
};

// export const register = credentials => dispatch => {
//   dispatch({ type: REGISTER_START });
//   axios
//     .post('https://muovivlio.herokuapp.com/auth/google', credentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.authToken);
//       localStorage.setItem('user_id', res.data.user.id);

//       dispatch({ type: REGISTER_SUCCESS });
//     })
//     .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
// };
