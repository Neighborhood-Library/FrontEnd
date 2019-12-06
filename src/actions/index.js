import axios from 'axios';

import {FETCH_USER,LOGIN_START,LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS} from './types';



export const fetchUser = () => async dispatch => {
  const user = await axios.get('/auth/current_user');

  dispatch({type: FETCH_USER, payload: user.data});
}

export const login = (credentials, history) => dispatch => {
  const creds = {
    user_name: credentials.username,
    user_credential: credentials.password

  };
  dispatch({ type: LOGIN_START });
  axios
    .post('https://muovivlio.herokuapp.com/auth/login', creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
        history.push('/homepage');
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
  };


    
export const register = (credentials, history, func) => dispatch => {
  const creds = {
    user_name: credentials.username,
    user_email: credentials.email,
    user_credential: credentials.password

  };
  dispatch({ type: REGISTER_START });
  axios
    .post('https://muovivlio.herokuapp.com/auth/register', creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      func.push('/login');
      console.log(res);
      return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
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

