import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  showPassword: false
};
export default class RegisterForm extends React.Component {
  state = initialState;

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

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
            <div className='sumbit-signup'>
              <button type='submit'>Submit</button>
              <Link className='loginLink' to='/login'>
                Already have an Account? Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
