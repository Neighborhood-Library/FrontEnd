import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';

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
    if (this.props.loggedIn) {
      this.props.history.push('/dashboard');
    } else {
      this.setState({username: "", password: ""});
    }
  };
  
  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/dashboard' />;
    }
    
    return (
      <section className='login'>
        <p className='login-title'> Login to your account</p>
        <form className="submitForm" onSubmit={this.submitForm}>
          <label for="username">Username</label>
          <input
            type='text'
            name='username'
            className='username'
            onChange={this.onChange}
            value={this.state.username}
            required
          />
          <label for="password">Password</label>
          <input
            type='password'
            name='password'
            className='username'
            onChange={this.onChange}
            value={this.state.password}
            required
          />
          <button type='submit'>
            Login
          </button>
        </form>

        <hr />
        <div className="alt-login">
          <p>Or Sign In Using</p>
          <div className="icons">
            <a href={`${process.env.REACT_APP_REQ_URL}/auth/google`}> 
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>

        <p className='forgot-password'>
        <a href='/#'>Forgot your password?</a>
        </p>
        
      </section>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, { login })(Login);
