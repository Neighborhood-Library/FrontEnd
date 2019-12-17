import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser } from './actions';
import './App.scss';
import Books from './books/Books.js';
import BookForm from './components/borrowerDashboard/BookForm';
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import { LandingPage } from './components/landingPage/LandingPage';
import Login from './components/login/Login.js';
import RegisterForm from './components/registration/RegisterForm';
import UserDashboard from './components/userDashboard/UserDashboard';
import PrivateRoute from './middleware/PrivateRoute';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import './scss/index.scss';

require('dotenv').config();

function App(props) {
  function renderContent() {
    if (props.loggedIn) {
      return <a href='https://muovivlio.herokuapp.com/auth/logout'>Logout</a>;
    } else {
      return (
        <Link className='login-btn' to='/login'>
          Login
        </Link>
      );
    }
  }

  return (
    <div className='App'>
      <header>
        <div className='logo-cont'>
          <Link to='/'>
            <img src='./img/myvivlio-logo.png' alt='logo' className='logo' />
          </Link>
        </div>
        <nav className='app-nav'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/dashboard'>Shelf</Link>
          <Link to='/books'>Books</Link>
          {renderContent()}
        </nav>
      </header>
      <h2 className='appTitle'>
        Share the Experience of Your Books With Others
      </h2>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={HomeDashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/borrow' component={BookForm} />
        <Route path='/books' component={Books} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <PrivateRoute path='/dashboard' component={UserDashboard} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  return { loggedIn: state.loginAuthReducer.loggedIn };
};

export default connect(mapStateToProps, { fetchUser })(App);
