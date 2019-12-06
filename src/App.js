import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser } from './actions';
import './App.css';
// import Admin from './components/login/Admin'
// import Logout from './components/login/Logout'
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import { LandingPage } from './components/landingPage/LandingPage';
import Login from './components/login/Login.js'
import RegisterForm from './components/registration/RegisterForm';

function App(props) {
  return (
    <div className='App'>
      <header>
        <div className='logo'>logo</div>
        <nav className='app-nav'>
          <Link to='/about'>About</Link>
          <Link to='/shelf'>Shelf</Link>
          <Link className='login-btn' to='/login'>
          {props.loggedIn ? 'Logout': "Login"}
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={HomeDashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state ) => {
  return {loggedIn: state.loginAuthReducer.loggedIn}
}

export default connect(mapStateToProps, { fetchUser })(App);
