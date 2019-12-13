import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './books.css';

import * as actions from '../actions/bookActions.js'
import Book from './Book.js';


class BookList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  getCurrUser = async () => {
    return await axios
    .get('https://muovivlio.herokuapp.com/auth/current_user', {
      withCredentials: true
    })
    .then(res => {
      return res.data.user[0].id;
    })
    .catch(err => {
      console.log(err);
    });
  }

  borrowBookHandler = async (bookId, isbn) => {
    const userID = await this.getCurrUser();

    if (!isNaN(userID)) {
      const bookInfo = {    
        borrower_id: userID,
        google_book_id: bookId,
        isbn,
        request_to_borrow: false
      }

      this.props.borrowBook(bookInfo);
    } else {
      return false;
    }
  }

  lendBookHandler = async (bookId, isbn) => {
    const userID = await this.getCurrUser();

    const bookInfo = {
      lender_id: userID,
      google_book_id: bookId,
      isbn,
      is_available: false
    }

    this.props.lendBook(bookInfo);
  }

  render() {
    const blankImg = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
    return (
      <div className="bookCards">
        {
          this.props.books.length === 0 ?
            <p>Search for a book</p>
          :
          this.props.books.map((book, i) => {
            return <Book
                      coverArt = {book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : blankImg }
                      title = {book.volumeInfo.title}
                      author={book.volumeInfo.authors}
                      publishedDate={book.volumeInfo.publishedDate}
                      toLink={book.volumeInfo.infoLink}
                      addToVivlio={this.props.addToVivlio} 
                      borrowBookHandler={this.borrowBookHandler}
                      lendBookHandler={this.lendBookHandler}
                      isbn={book.volumeInfo.industryIdentifiers[0].identifier}
                      id={book.id}
                      key={i}/>
          })
        }
      </div>
    )
  }
}

export default connect(null, actions)(BookList);