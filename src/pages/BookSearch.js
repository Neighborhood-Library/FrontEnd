import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/books/SearchComponent.js';
import BookList from '../components/books/BookList.js';
import BookPagePagination from '../components/books/BookPagePagination.js';

class Books extends Component {
  constructor(props) {
      super(props);
      this.state = {
        books: '',
        searchInput: '',
        ownedBooks: [],
        activePageIndex: 0
      }

  }
  handleInput = e => {
    e.preventDefault();
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSearch = async (e, index) => {
    e.preventDefault()

    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&maxResults=20&startIndex=${this.state.activePageIndex}`)
      .then(data => {
        this.setState({
          books: data.data
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <div className="bookHeadCont">
          <div>
            <h1>Search for Books</h1>
            <p>Discover the endless library of books provided by Google Books. Search this library in the search bar and request to borrow or lend out your book.</p>
          </div>
          <Search
            handleInput={this.handleInput}
            handleSearch={this.handleSearch}
            searchInput={this.searchInput}
          />
        </div>
        <BookList books={this.state.books} logOut={this.props.logOut} />



        {/* Search by Book Pages */}
        {
            this.state.books !== '' ?
            (
              <BookPagePagination
                books={this.state.books.totalItems}
                activePageIndex={this.state.activePageIndex}  
              />
            ) : ''
        }



      </section>
    )
  }
}

export default Books;