import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/index';
import CustomButton from '../customButton/CustomButton';
import './RegisterForm.css';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    showPassword: false
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      showPassword: false
    });
    this.props.history.push('/login');
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };
  // This needs to be moved to the dashboard or navbar/header component
  //this is logic to basically check to see if logged in, and
  //display the corresponding button based on the state
  //wire the component/s it goes in to connect and {authreducer}
  // renderContent() {
  //   switch (this.props.authReducer) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <button>
  //           <a href='/auth/google'>Login With Google</a>
  //         </button>
  //       );
  //     default:
  //       return (
  //         <button>
  //           <a href='/auth/logout'>Logout</a>
  //         </button>
  //       );
  //   }
  // }

  render() {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      showPassword
    } = this.state;
    return (
      <div className='container'>
        <div className='form-container'>
          <h1>Sign Up</h1>
          <form className='form-content' onSubmit={this.handleSubmit}>
            <div className='firstName'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='username'>
              <label htmlFor='username'>Create a Username</label>
              <input
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='password'>
              <label htmlFor='password'>Create a Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleChange}
                required
              />
              <i
                className={`fa ${
                  showPassword ? 'fa-eye-slash fa-lg' : 'fa-eye fa-lg'
                } password-icon`}
                onClick={this.togglePassword}
              />
            </div>
            <div className='register'>
              <CustomButton type='submit' isRegister>
                Submit
              </CustomButton>
              <span className='login-link'>
                Already have an Account?{' '}
                <Link className='login-link' to='/login'>
                  Log in
                </Link>
              </span>
              <span className='or'>- OR -</span>
              <div className='google-button'>
                <CustomButton type='submit' signinWithGoogle>
                  <a href='https://muovivlio.herokuapp.com/auth/google'>
                    Login With Google
                  </a>
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { register })(RegisterForm);
