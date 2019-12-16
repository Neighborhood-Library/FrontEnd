import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true
    }
  }

  componentDidMount = async () => {
    const URL = process.env.REACT_APP_ENV === 'testing' ? 'http://localhost:5000/auth/current_user' : 'https://muovivlio.herokuapp.com/auth/current_user';

    await axios
      .get(URL, { withCredentials: true })
      .then(res => {
        this.setState({ auth: true });
        return;
      })
      .catch(err => {
        this.setState({ auth: false });
      });
  }

  
  render() {
    console.log(this.props);
    return(
      <>
        {
          this.state.auth ? (
            <Route props render={() => <this.props.component />} />
          ) : (
            <Route render={() => <Redirect to="/login" />} />
          )
        }
      </>
    )
  }
}

export default PrivateRoute;