import React from 'react';
import Login from "./components/login/Login";
import './App.css';
import {BrowserRouter as Switch,Route} from 'react-router-dom';
import Admin from './components/login/Admin'
import Logout from './components/login/Logout'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="app-title">MyVivlio</h1>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/admin" component={Admin}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </div>
    );
  }
}


export default App;