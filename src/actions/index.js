import axios from 'axios';

import {FETCH_USER,FETCH_USER_FAILURE,LOGIN_START,LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS} from './types';

export const fetchUser = () => async dispatch => {
  return await axios
    .get(`${process.env.REACT_APP_REQ_URL}/auth/current_user`,
      {withCredentials: true})
    .then(res => {
      if (res.user) {
        dispatch({ type: FETCH_USER, payload: res.user.data });
        return true;
      } else if (res.data.user) {
        dispatch({ type: FETCH_USER, payload: res.data.user[0] });
        return true;
      } else {
        dispatch({ type: FETCH_USER });
        return false;
      }
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAILURE });
      return false;
    });
}

export const login = (credentials, history) => async dispatch => {
  const creds = {
    user_name: credentials.username,
    user_credential: credentials.password

  };

  dispatch({ type: LOGIN_START });
  await axios
    .post(`${process.env.REACT_APP_REQ_URL}/auth/login`, creds, {withCredentials: true})
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
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
    .post(`${process.env.REACT_APP_REQ_URL}/auth/register`, creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      func.push('/login');
      return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
      return false;
    });
};