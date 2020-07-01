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

  // changeBack(){
  //   document.getElementById("input").style.color = "black";
  // }
  // changeMe() {
  //   document.getElementById("input").style.color = "blue";
  // }
  submitForm = async e => {
    e.preventDefault();
    await this.props.logInHandler(e, this.state);
    this.props.history.push('/dashboard');
  };
  

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/dashboard' />;
    }
    
    return (
      <div id='absoluteCenteredDiv'>
        <div className='box'>
          <p className='login-title'> Login to your account</p>
          <br>
          </br>
          
          <form className="submitForm" onSubmit={this.submitForm}>
            <i id="input" className="fas fa-user fa-5x "></i>
            <input
              // onMouseEnter = {this.changeMe}
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
            <i className="fas fa-lock fa-5x"></i>
            <input
              className='username'
              onChange={this.onChange}
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              required
            />
            <button className='login-button' type='submit'>
              Login
            </button>
          </form>
          <p>Or Sign In Using</p>
          
            <a className="login100-social-item bg3" href={`${process.env.REACT_APP_REQ_URL}/auth/google`}> 
              <i className="fab fa-google"></i>
            </a>
          
          <br>
          </br>
          <p className='forgot-password'>
          Forgot your password?{' '}
          <a className='fpwd' href='/#'>
            Click Here!
          </a>
        </p>
          
        </div> 
        <br>
        </br>
        
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, { login })(Login);
