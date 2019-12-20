import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser, login } from './actions/index';
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
import Axios from 'axios';

require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logOut: false
    }
  }

  componentDidMount = async () => {
    this.checkCookie();
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props !== prevProps) {
      this.checkCookie();
    }
  }

  checkCookie = async () => {
    const userData = await this.props.fetchUser();

    if (userData) {
      this.setState({ logOut: true });
    } 
  }

  renderContent() {
    if (this.state.logOut === true) {
      return <button className='login-btn' onClick={this.logOutHandler}>Logout</button>;
    } else {
      return (
        <Link className='login-btn' to='/login'>
          Login
        </Link>
      );
    }
  }

  logInHandler = async (e, info) => {
    e.preventDefault();
    await this.props.login(info)
      .then(res => {
        this.setState({ logOut: true });
      })
      .catch(err => {
        this.props.history.push('/login');
      });
  }

  logOutHandler = async () => {
    await Axios
      .get(`${process.env.REACT_APP_REQ_URL}/auth/logout`,
      {withCredentials: true})
      .then(res => {
        this.setState({ logOut: false });
        this.props.history.push('/login');
      });
  }

  render() {
    return (
      <div className='App'>
        <header>
          <div className='logo-cont'>
            <Link to='/'>
              <img src='/img/myvivlio-logo.png' alt='logo' className='logo' />
            </Link>
          </div>
          <nav className='app-nav'>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/dashboard'>Shelf</Link>
            <Link to='/books'>Books</Link>
            {this.renderContent()}
          </nav>
        </header>
        <h2 className='appTitle'>
          Share the Experience of Your Books With Others
        </h2>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/homepage' component={HomeDashboard} />
          <Route path='/login' render={() => <Login logInHandler={this.logInHandler} history={this.props.history} />} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/borrow' component={BookForm} />
          <Route path='/books' component={Books} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <PrivateRoute path='/dashboard' checkCookie={this.checkCookie} component={UserDashboard} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { loggedIn: state.loginAuthReducer.loggedIn };
};

export default connect(mapStateToProps, { fetchUser, login })(App);