import React, { Component } from 'react'
import './books.css'
import Search from './SearchComponent.js'
import axios from 'axios'
// import request from "superagent"

class Books extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: [],
        searchInput: ''
      }

  }
  handleInput = e => {
    e.preventDefault()
    console.log(`You searched for ${this.state.searchInput}`)
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearch = e => {
    e.preventDefault()
    // console.log(this.state.searchInput)
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
      .then(data => {
        this.setState({
          books: [...data.body.items]
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Search handleInput={this.handleInput} handleSearch={this.handleSearch} searchInput={this.searchInput}/>
    )
  }
}

export default Books


// https://www.googleapis.com/books/v1/volumes?q=search+terms
