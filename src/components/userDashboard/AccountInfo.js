import React from 'react';
import axios from 'axios';

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
            <form>
              <input name="currentPass"></input>
              <input name="newPass"></input>
              <button>Update Password</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default AccountInfo;