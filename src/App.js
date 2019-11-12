import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import OwnedBooks from './books/ownedBooks.js'

import { connect } from 'react-redux'
class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <OwnedBooks />
        </div>
      )
  }

}
const mapStateToProps = state => ({
  books: state.books,
  user: state.user
})
const mapActionsToProps = {

}
export default connect(mapStateToProps)(App)