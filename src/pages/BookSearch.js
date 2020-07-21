import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/books/SearchComponent.js';
import BookList from '../components/books/BookList.js';

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
    e.preventDefault();
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSearch = async e => {
    e.preventDefault()

    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
      .then(data => {
        console.log(data)
        this.setState({
          books: [...data.data.items]
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <Search
          handleInput={this.handleInput} handleSearch={this.handleSearch}
          searchInput={this.searchInput}/>
        <BookList books={this.state.books} logOut={this.props.logOut} />
      </section>
    )
  }
}

export default Books;