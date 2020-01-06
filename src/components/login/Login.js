import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/index';
import './Login.css';
// import {TweenMax,Power3} from "gsap";
// import Change from './NavBar'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      
    };
  }
 

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = async e => {
    e.preventDefault();
    await this.props.logInHandler(e, this.state);
    this.props.history.push('/dashboard');
  };
  // inputChange = e => {
  //   e.preventDefault();
  //   document.querySelector(".username").style = "red";
  // }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/dashboard' />;
    }
    
    
    
    return (
      <div id='absoluteCenteredDiv'>
        <div className='box'>
          <h1 className='login-title'> Login </h1>
          <div>
          <form className="submitForm" onSubmit={this.submitForm}>
            <div className="inputs">
            <i class="fas fa-user fa-6x "></i>
            <input
              onClick = {this.inputChange}
              className='username'
              onChange={this.onChange}
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              required
            />
            <br>
            </br>
            <i class="fas fa-key fa-6x"></i>
            <input
              className='username'
              onChange={this.onChange}
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              required
            />
            </div>
            <button className='button' type='submit'>
              Login
            </button>
          </form>
          <button>
            <a href='https://muovivlio.herokuapp.com/auth/google'>
              Sign In With Google
            </a>
          </button>
          </div>
        </div>
        <p className='forgot-password'>
          Forgot your password?{' '}
          <a className='fpwd' href='/#'>
            Click Here!
          </a>
        </p>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, { login })(Login);
