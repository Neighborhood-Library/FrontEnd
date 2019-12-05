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

    this.props.login(this.state);
    this.props.history.push('/homepage');
  };
  

  // submitForm(e){
  //   e.preventDefault()
  //   const {username,password} = this.state
  //   if (username === "A" && password === "B"){
  //     localStorage.setItem("token", "kjsdofiajsiofjsoifjiodsf")
  //     this.setState({
  //       loggedIn:true
  //     })
  //   }
  // }

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/homepage"/>
    }
    return (
      <div id="absoluteCenteredDiv">
        <h1> Login </h1>
        <div class="box">
        <form onSubmit={this.submitForm}>
          <input
           class="username"
            onChange={this.onChange}
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            required
          />
          <input
           class="username"
            onChange={this.onChange}
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            required
          />
          <button class="button" type='submit'>Login</button>
        </form>
        <button>
          <a href="https://muovivlio.herokuapp.com/auth/google">Sign In With Google</a>
        </button>
        </div>
        <p>Forgot your password? <a class="fpwd" href=" // eslint-disable-next-line#">Click Here!</a></p>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
  
});

export default connect(mapStateToProps, { login })(Login);
