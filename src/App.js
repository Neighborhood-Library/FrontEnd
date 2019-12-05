import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/registration/RegisterForm';
import BorrowerDashboard from './components/borrowerDashboard/BorrowerDashboard';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomeDashboard} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/borrow' component={BorrowerDashboard} />
      </Switch>
    </div>
  );
}

export default App;
