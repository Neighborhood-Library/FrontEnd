import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = async ({ component: Component, ...rest }) => {
  const signedIn = await axios
    .get('https://muovivlio.herokuapp.com/auth/current_user', {
      withCredentials: true
    })
    .then(res => {
      // return true
      return <Route {...rest} render={() => <Component />} />
    })
    .catch(err => {
      // return false
      return <Route render={() => <Redirect to="/login" />} />
    });

    console.log(signedIn);

    return signedIn;

  // return (
  //   <Route
  //     {...rest}
  //     render={() => 
  //       signedIn ? (
  //         <Component />
  //       ) : (
  //         <Redirect to="/login" />
  //       )}
  //   />
  // )
};

export default PrivateRoute;