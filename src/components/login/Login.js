import React from "react";
import {Redirect} from "react-router-dom"
import "./Login.css";
import {login} from "../../actions/index";
import {connect} from "react-redux";
// import { GoogleLogin } from 'react-google-login';


class Login extends React.Component {
  
  state = {
    username: '',
    password: '',
    loggedIn : false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  submitForm = e => {
    e.preventDefault();
    this.props.login(this.state,this.props.history);
  };

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/homepage"/>
    }
    return (
      <div id="absoluteCenteredDiv">
        <h1 className='login-title'> Login </h1>
        <div className="box">
        <form onSubmit={this.submitForm}>
          <input
            className="username"
            onChange={this.onChange}
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            required
          />
          <input
            className="username"
            onChange={this.onChange}
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            required
          />
          <button className="button" type='submit'>Login</button>
        </form>
        <button>
          <a href="https://muovivlio.herokuapp.com/auth/google">Sign In With Google</a>
        </button>
        </div>
        <p className='forgot-password'>Forgot your password? <a className="fpwd" href=" // eslint-disable-next-line#">Click Here!</a></p>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
  
});

export default connect(mapStateToProps, { login })(Login);
