import React, { Component } from 'react'
import './books.css'
import Search from './SearchComponent.js'
// import axios from 'axios'
import request from "superagent"

class Books extends Component {
  constructor(props) {
    super(props)
      this.state = {
        books: [],
        searchInput: ''
      }

  }

  handleSearch = () => {
    console.log(this.state.searchInput)
    request
      .get(`https://www.googleapis.com/books/v1/volumes?`)
      .query({
        q: this.state.searchInput
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  handleInput = e => {
    e.preventDefault()
    console.log(`You searched for ${this.state.searchInput}`)
    this.setState({
      searchInput: e.target.value
    })
  }
  render() {
    return (
      <Search handleInput={this.handleInput} handleSearch={this.handleSearch} />
    )
  }
}

export default Books


// https://www.googleapis.com/books/v1/volumes?q=search+terms
