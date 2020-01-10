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
          <div>
          <form className="submitForm" onSubmit={this.submitForm}>
            <div className="inputs">
              <div className="username-box">
            <i id="input"class="fas fa-user fa-5x "></i>
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
            </div>
            <div className="password-box">

            
            <br>
            </br>
            {/* <i class="fas fa-key fa-6x"></i> */}
            <i class="fas fa-lock fa-5x"></i>
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
            </div>
            <button className='login-button' type='submit'>
              Login
            </button>
          </form>
          <p>Or Sign In Using</p>
          
            <a class="login100-social-item bg3" href='https://muovivlio.herokuapp.com/auth/google'> 
              <i class="fab fa-google"></i>
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
