import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import rootReducer from './reducers';

// include rootReducer, after reducers created
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" render={(props) => <App {...props} />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);