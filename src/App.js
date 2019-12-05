import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
// import HomeDashboard from './components/homeDashboard/HomeDashboard';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/registration/RegisterForm';
import { LandingPage } from './components/landingPage/LandingPage';
import { connect } from 'react-redux'

function App() {
  return (
    <div className='App'>
    <header>
      <div className="logo">logo</div>
      <nav className="app-nav">
        <Link to="/about">About</Link>
        <Link to="/shelf">Shelf</Link>
        <Link className="login-btn" to="/login">Login</Link>
      </nav>
    </header>
      <Switch>

        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  user: state.user
})
// const mapActionsToProps = {
//
// }
export default connect(mapStateToProps)(App)