import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { combineReducers, Provider } from 'react-redux'
import bookReducer from './reducers/bookReducer.js'
import userReducer from './reducers/userReducer.js'

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
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
