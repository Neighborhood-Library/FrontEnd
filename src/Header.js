import React from 'react'
import './App.css'

class Header extends React.Component {
  state = {
    bookSearch: ''
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSearch = e => {
    console.log(`You searched for ${this.state.bookSearch}`)
  }
  render () {
    return (
      <header className="nav">
        <h1 className="title">Vivlio</h1>
        <div className="searchHolder">
          <input
            type="text" className="bookSearch"
            placeholder="Search for book" name="bookSearch"
            value={this.state.bookSearch} onChange={this.handleChange}></input>
          <button className="searchBtn" type="submit" onClick={this.handleSearch}><i className="fas fa-search"></i></button>
        </div>
        <div className="actions">
          <select className="filter">
            <option defaultChecked className="viewFilterOptions">View By:</option>
            <option className="viewFilterOptions">Owned Books</option>
            <option className="viewFilterOptions">Wishlist</option>
          </select>
          <button className="actionBtn account"><i className="far fa-user"></i></button>
          <button className="actionBtn logout">Log Out</button>
        </div>
      </header>
    )
  }
}

export default Header