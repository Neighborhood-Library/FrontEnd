import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/books/SearchComponent.js';
import BookList from '../components/books/BookList.js';

class Books extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: '',
        searchInput: '',
        ownedBooks: [],
        searchPageIndex: 0
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
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&maxResults=40&startIndex=${this.state.searchPageIndex}`)
      .then(data => {
        console.log(data)
        this.setState({
          books: data.data
        })
      })
      .catch(err => console.log(err))
  }

  pagination = () => {
    console.log('pagination running');
    const pageCount = Math.ceil(this.state.books.totalItems / 40);
    let pagesList = [];

    for (let count = 0; count <= pageCount; count++) {
      pagesList.push(`${count}`);
    }

    console.log(pagesList.length);
    return pagesList;
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
              <div>
                
              </div>
            ) : ''
        }



      </section>
    )
  }
}

export default Books;