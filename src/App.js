import React from 'react';
import {BrowserRouter as Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions/index';
import Login from "./components/login/Login";
import './App.css';
// import Admin from './components/login/Admin'
import Logout from './components/login/Logout'
import HomeDashboard from './components/homeDashboard/HomeDashboard';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="app-title">MyVivlio</h1>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/homepage" component={HomeDashboard}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </div>
    );
  }
}



export default connect(null, {fetchUser })(App);