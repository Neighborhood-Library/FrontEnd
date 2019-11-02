import React from 'react'
import './App.css'

const Header = () => {
  return (
    <header className="nav">
      <h1 className="title">Vivlio</h1>
      <div className="searchHolder">
        <input type="text" className="bookSearch" placeholder="Search..." name="search"></input>
        <button className="searchBtn"><i class="fas fa-search"></i></button>
      </div>
      <div className="actions">
        <button className="actionBtn account"><i class="far fa-user"></i></button>
        <button className="actionBtn logout">Log Out</button>
      </div>
    </header>
  )
}

export default Header