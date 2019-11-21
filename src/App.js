import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchUser } from './actions';
import './App.css';
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/registration/RegisterForm';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/home' component={HomeDashboard} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
