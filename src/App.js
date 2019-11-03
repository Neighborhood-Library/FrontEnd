import React from 'react'
import './App.css'
import Header from './Header.js'
import OwnedBooks from './books/ownedBooks.js'

function App() {
  return (
    <div className="App">
      <Header />
      <OwnedBooks />
    </div>
  )
}

export default App
