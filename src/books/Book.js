import React from 'react';

import './books.css'
import '../App.scss'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  callBorrowBook = () => {
    this.props.borrowBookHandler(this.props.id, this.props.isbn);
  }

  callLendBook = () => {
    this.props.lendBookHandler(this.props.id, this.props.isbn);
  }

  render() {
    return (
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src={this.props.coverArt}></img>
        <h2 className="bookTitle">{this.props.title}</h2>
        <h4 className="author">{this.props.author}</h4>
        <p className="bookSummary">{this.props.publishedDate}</p>
        <a href={this.props.toLink}>Learn More</a>
        {/* <button className="addBtn" onClick={props.addToVivlio}>Add to MyVivlio</button> */}
        <button onClick={this.callBorrowBook}>Borrow book</button>
        <button onClick={this.callLendBook}>Lend book</button>
      </div>
    )
  }
}

export default Book;
