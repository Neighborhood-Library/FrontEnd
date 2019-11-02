import React from 'react';

export default class RegisterForm extends React.Component {
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
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword } = this.state;
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
                value={this.state.firstName}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='username'>
              <label htmlFor='username'>Create a Username</label>
              <input
                type='text'
                placeholder='Username'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className='password'>
              <label htmlFor='password'>Create a Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                onChange={this.handleSubmit}
              />
              <i
                className={`fa ${
                  showPassword ? 'fa-eye-slash fa-lg' : 'fa-eye fa-lg'
                } password-icon`}
                onClick={this.togglePassword}
              />
            </div>
            <div className='sumbit-signup'>
              <button type='submit'>Sign Up</button>
              <span>
                Already have an Account? <a href='/'>Log In</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
