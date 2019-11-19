import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  createStore,
  combineReducers
  } from 'redux'
import { Provider } from 'react-redux'
import bookReducer from './reducers/bookReducer.js'
import userReducer from './reducers/userReducer.js'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

const allReducers = combineReducers({
  books: bookReducer,
  user: userReducer
})
const store = createStore(allReducers, {
  books: [{
    title: 'The Outsiders',
    user: 'Carlos'
  }]
})
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}
store.dispatch(action)
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
