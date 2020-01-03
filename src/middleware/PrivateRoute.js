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
    const URL = `${process.env.REACT_APP_REQ_URL}/auth/current_user`;

    await axios
      .get(URL, { withCredentials: true })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          this.setState({ auth: true });
          return;
        } else {
          this.setState({ auth: false });
          return;
        }
      })
      .catch(err => {
        this.setState({ auth: false });
      });
  }

  
  render() {
    return(
      <>
        {
          this.state.auth ? (
            <Route render={() => <this.props.component checkCookie={this.props.checkCookie} />} />
          ) : (
            <Route render={() => <Redirect to="/login" />} />
          )
        }
      </>
    )
  }
}

export default PrivateRoute;