import React from 'react';
<<<<<<< HEAD
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
=======
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser } from './actions';
import './App.css';
>>>>>>> f11e5d7c0bff35826dd55c4f97ab1ff99d093748
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import { LandingPage } from './components/landingPage/LandingPage';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/registration/RegisterForm';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='logo'>logo</div>
        <nav className='app-nav'>
          <Link to='/about'>About</Link>
          <Link to='/shelf'>Shelf</Link>
          <Link className='login-btn' to='/login'>
            Login
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={HomeDashboard} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default connect(null, { fetchUser })(App);
