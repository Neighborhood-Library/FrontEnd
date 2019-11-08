import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/registration/RegisterForm';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomeDashboard} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
