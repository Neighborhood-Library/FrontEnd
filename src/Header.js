import React from 'react'
import './header.css'
// import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    bookSearch: '',
    menuIsOpen: false,
    userIsLoggedIn: true
  }

  handleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }
  render () {
    return (
      <header className="nav">
        <div className="left">
          <h1 className="title">Vivlio</h1>
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
          <ul className={!this.state.menuIsOpen ? "menuClosed": "menuOpen"}>
          {/** these links will be NavLinks once I figure out how to use it **/}
            <li>My Account</li>
            <li>Settings</li>
            <li><button className="logout">Log Out</button></li>
          </ul>
        </div>

      </header>
    )
  }
}

export default Header

//{/* <button className="actionBtn account"><i className="far fa-user"></i></button>
//<button className="actionBtn logout">Log Out</button> */}