import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/index';
import './Login.css';
// import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = async e => {
    e.preventDefault();
    await this.props.login(this.state);
    this.props.history.push('/dashboard');
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div id='absoluteCenteredDiv'>
        <div className='box'>
          <h1 className='login-title'> Login </h1>
          <form onSubmit={this.submitForm}>
            <input
              className='username'
              onChange={this.onChange}
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              required
            />
            <input
              className='username'
              onChange={this.onChange}
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              required
            />
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
