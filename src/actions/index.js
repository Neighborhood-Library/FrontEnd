import axios from 'axios';

import {FETCH_USER,LOGIN_START,LOGIN_FAILURE,LOGIN_SUCCESS} from './types';

export const fetchUser = () => async dispatch => {
  const user = await axios.get('/auth/current_user');

  dispatch({type: FETCH_USER, payload: user.data});
}

export const login = (credentials, history) => dispatch => {
  const creds = {
    user_email: credentials.email,
    user_credential: credentials.password

  };
  dispatch({ type: LOGIN_START });
  axios
    .post('https://muovivlio.herokuapp.com/api/users/', creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        history.push('/homepage');
      }
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
      return false;
    });
};

// export const login = creds => dispatch => {
//   dispatch({ type: LOGIN_START });
//   axios
//     .post(
//       "https://muovivlio.herokuapp.com/auth/google",
//       creds
//     )
//     .then(res => {
//       console.log(res.data)
//       localStorage.setItem('token', res.data.authToken);
//       localStorage.setItem("user_id", res.data.user.id);
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data});
//       return true;
//     })
//     .catch(err => {dispatch({type:LOGIN_FAILURE, payload:err})
//   console.log(localStorage.token)});
// };