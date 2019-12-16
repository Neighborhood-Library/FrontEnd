import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

// const PrivateRoute = async ({ component: Component, ...rest }) => {
//   const signedIn = await axios
//     .get('https://muovivlio.herokuapp.com/auth/current_user', {
//       withCredentials: true
//     })
//     .then(res => {
//       // return true
//       return (<Route {...rest} render={() => <Component />} />)
//     })
//     .catch(err => {
//       // return false
//       return (<Route render={() => <Redirect to="/login" />} />)
//     });

//     console.log(signedIn);

//     return signedIn;

//   // return (
//   //   <Route
//   //     {...rest}
//   //     render={() => 
//   //       signedIn ? (
//   //         <Component />
//   //       ) : (
//   //         <Redirect to="/login" />
//   //       )}
//   //   />
//   // )
// };

const getUser = async () => {
  const URL = process.env.REACT_APP_ENV === 'testing' ? 'http://localhost:5000/auth/current_user' : 'https://muovivlio.herokuapp.com/auth/current_user';

  await axios
    .get(URL, { withCredentials: true })
    .then(res => {
      return true;
    })
    .catch(err => {
      return false;
    });
}

console.log(getUser());

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getUser() ? (
      <Component {...props}/>
    ) : (
      <Redirect to='/login' />
    )
  )}/>
)

// class PrivateRoute extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       auth: undefined
//     }
//   }

//   componentWillMount = async () => {
//     const URL = process.env.REACT_APP_ENV === 'testing' ? 'http://localhost:5000/auth/current_user' : 'https://muovivlio.herokuapp.com/auth/current_user';

//     await axios
//       .get(URL, { withCredentials: true })
//       .then(res => {
//         this.setState({ auth: true });
//         return;
//       })
//       .catch(err => {
//         this.setState({ auth: false });
//       });
//   }

//   render() {
//     return(
//       <>
//         {
//           this.state.auth ? (
//             <Route props render={() => <props.Component />} />
//           ) : (
//             <Route render={() => <Redirect to="/login" />} />
//           )
//         }
//       </>
//     )
//   }
// }

export default PrivateRoute;