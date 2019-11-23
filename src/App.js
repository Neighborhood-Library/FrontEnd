import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
// import OwnedBooks from './books/ownedBooks.js'
// import Wishlist from './books/wishlist'
// import { Route } from 'react-router-dom'
import Books from "./books/Books";

import { connect } from 'react-redux'
class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <Books />
          {/* <OwnedBooks /> */}
          {/* <Route path="/"></Route>
          <Route path="/OwnedBooks" Component={OwnedBooks}></Route>
          <Route path="/Wishlist" Component={Wishlist}></Route> */}
        </div>
      )
  }

}
const mapStateToProps = state => ({
  books: state.books,
  user: state.user
})
// const mapActionsToProps = {
//
// }
export default connect(mapStateToProps)(App)