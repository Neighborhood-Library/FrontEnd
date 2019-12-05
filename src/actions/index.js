import axios from 'axios';
import {
  FETCH_USER,
  REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const register = (credentials, history) => dispatch => {
  const creds = {
    user_name: credentials.username,
    user_email: credentials.email,
    user_credential: credentials.password

    // firstName: credentials.firstName,
    // lastName: credentials.lastName,
    // username: credentials.username,
    // email: credentials.email,
    // password: credentials.password
  };
  dispatch({ type: REGISTER_START });
  axios
    .post('https://muovivlio.herokuapp.com/auth/register', creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      history.push('/login');
      console.log(res);
      return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
      return false;
    });
};

// export const register = credentials => {
//   return async dispatch => {
//     try {
//       const res = await axios.post(
//         'https://muovivlio.herokuapp.com/auth/register',
//         credentials
//       );
//       console.log('res', res);
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data.token
//       });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user_id', res.data.user.id);
//     } catch (err) {
//       console.errro('err', err);
//     }
//   };
// };
