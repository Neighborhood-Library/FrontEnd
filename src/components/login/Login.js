import React,{Component} from "react";
import {Redirect} from "react-router-dom"
import "./Login.css"
// import { GoogleLogin } from 'react-google-login';


export default class Login extends Component {
  constructor(props){
    super(props)
    let loggedIn = false
  
  this.state = {
    username: '',
    password: '',
    loggedIn
  }
  this.onChange = this.onChange.bind(this)
  this.submitForm = this.submitForm.bind(this)
  this.responseGoogle = this.responseGoogle.bind(this);
}
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async responseGoogle(res) {
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/admin');
    }
  }

  submitForm(e){
    e.preventDefault()
    const {username,password} = this.state
    if (username === "A" && password === "B"){
      localStorage.setItem("token", "kjsdofiajsiofjsoifjiodsf")
      this.setState({
        loggedIn:true
      })
    }
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/admin"/>
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

