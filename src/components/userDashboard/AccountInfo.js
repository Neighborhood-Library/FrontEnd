import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateUser } from '../../actions/userActions';

class AccountInfo extends React.Component {
  state = {
    user: {}
  }

  componentDidMount = async () => {
    await axios
      .get(`${process.env.REACT_APP_REQ_URL}/auth/current_user`, {withCredentials: true})
      .then(res => {
        this.setState({user: res.data.user[0]})
      })
      .catch(err => console.log(err.body));
  }

  submitHandler = e => {
    e.preventDefault();

    alert('This feature is not currently working. Please try again later');
  }
  
  render() {
    if (this.state.user === {}) {
      return (
        <p>User is loading...</p>
      )
    } else {
      return (
        <div className="account">
          <div className="half-col">
            <p>Welcome, {this.state.user.user_name}!</p>
          </div>
          <div className="half-col">
            <h3>Change your password</h3>
            <hr />
            <form onSubmit={this.submitHandler}>
              <label to="currentPass">Current Password</label>
              <input name="currentPass" className="form-control"></input>
              <label to="currentPass">New Password</label>
              <input name="newPass" className="form-control"></input>
              <button className="lendBookBtn custom-button" onSubmit={this.submitHandler}>Update Password</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, { updateUser })(AccountInfo);