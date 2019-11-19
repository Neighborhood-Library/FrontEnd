import React from 'react'
import './App.css'
// import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    bookSearch: '',
    menuIsOpen: false,
    userIsLoggedIn: true
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSearch = e => {
    console.log(`You searched for ${this.state.bookSearch}`)
  }
  handleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
    console.log(this.state.menuIsOpen)
  }
  render () {
    return (
      <header className="nav">
        <div className="left">
          <h1 className="title">Vivlio</h1>
        </div>
        <div className="middle">
          <div className="searchHolder">
            <input
              type="text" className="bookSearch"
              placeholder="Search for book" name="bookSearch"
              value={this.state.bookSearch} onChange={this.handleChange}></input>
            <button className="searchBtn" type="submit" onClick={this.handleSearch}><i className="fas fa-search"></i></button>
          </div>
        </div>
        <div className="right">
          <select className="filter">
            <option defaultChecked className="viewFilterOptions">View By:</option>
            <option className="viewFilterOptions">Owned Books</option>
            <option className="viewFilterOptions">Wishlist</option>
          </select>
          <button className="menu" onClick={this.handleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

      </header>
    )
  }
}

export default Header

//{/* <button className="actionBtn account"><i className="far fa-user"></i></button>
//<button className="actionBtn logout">Log Out</button> */}