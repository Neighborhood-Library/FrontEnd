import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './books.css';

import * as actions from '../actions/bookActions.js'
import Book from './Book.js';
import Warning from '../components/Warning';


class BookList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      warning: false
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

  // limits borrowed books to 5
  checkBorrowStatus = async (userID) => {
    return await axios
      .get(`https://muovivlio.herokuapp.com/api/borrower-wishlist/${userID}`, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.length >= 5) {
          return false;
        } else {
          return true;
        }
      })
      .catch(err => console.log(err.body));
  }

  // limits lendable books to 5
  checkLendStatus = async (userID) => {
    return await axios
      .get(`https://muovivlio.herokuapp.com/api/lender-collection/${userID}`, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.length >= 5) {
          return false;
        } else {
          return true;
        }
      })
      .catch(err => console.log(err.body));
  }

  borrowBookHandler = async (bookId, isbn) => {
    const userID = await this.getCurrUser();
    const borrowStatus = await this.checkBorrowStatus(userID);

    if (borrowStatus === true) {
      const bookInfo = {    
        borrower_id: userID,
        google_book_id: bookId,
        isbn,
        request_to_borrow: false
      }

      this.props.borrowBook(bookInfo);
    } else {
      // render warning and set kill time
      setTimeout(() => this.setState({ warning: false }), 3000);
      this.setState({ warning: true });
    }
  }

  lendBookHandler = async (bookId, isbn) => {
    const userID = await this.getCurrUser();
    const lendStatus = await this.checkLendStatus(userID);

    if (lendStatus === true) {
      const bookInfo = {
        lender_id: userID,
        google_book_id: bookId,
        isbn,
        is_available: false
      }
  
      this.props.lendBook(bookInfo);
    } else {
      // set Warning kill time and render Warning
      setTimeout(() => this.setState({ warning: false }), 3000);
      this.setState({ warning: true });
    }
  }

  render() {
    const blankImg = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
    return (
      <>
        {
          this.state.warning ?
            <Warning />
          :
            <></>
        }
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
                        isbn={book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : 'N/A'}
                        id={book.id}
                        key={i}/>
            })
          }
        </div>
      </>
    )
  }
}

export default connect(null, actions)(BookList);