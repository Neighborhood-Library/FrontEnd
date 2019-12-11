import React, { Component } from 'react'
import './books.css'
import Search from './SearchComponent.js'
import axios from 'axios'
import BookList from './BookList.js'
import '../header.scss'

class Books extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: [],
        searchInput: '',
        ownedBooks: []
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
        console.log(data)
        this.setState({
          books: [...data.data.items]
        })
      })
      .catch(err => console.log(err))
  }
  addToVivlio = title => {
    console.log(`you clicked on ${title}`)
  }

  render() {
    return (
      <div>
        <Search
          handleInput={this.handleInput} handleSearch={this.handleSearch}
          searchInput={this.searchInput}/>
        <BookList books={this.state.books} addToVivlio={this.addToVivlio}/>
      </div>
    )
  }
}

export default Books


// https://www.googleapis.com/books/v1/volumes?q=search+terms
