import React from 'react';
import '../App.scss';
import CustomButton from '../components/customButton/CustomButton';
import './books.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  callBorrowBook = () => {
    this.props.borrowBookHandler(this.props.id, this.props.isbn);
  };

  callLendBook = () => {
    this.props.lendBookHandler(this.props.id, this.props.isbn);
  };

  render() {
    return (
      <div className='bookCard'>
        <img
          className='coverArt'
          alt='Cover Art'
          src={this.props.coverArt}
        ></img>
        <h2 className='bookTitle'>{this.props.title}</h2>
        <h4 className='author'>By: {this.props.author}</h4>
        <p className='bookSummary'>Published: {this.props.publishedDate}</p>
        <a className='learnMore' href={this.props.toLink}>
          Learn More
        </a>
        <div className='borrowBookBtn'>
          <CustomButton isBorrowBook onClick={this.callBorrowBook}>
            Borrow book
          </CustomButton>
        </div>
        <div className='btnDivider'>OR</div>
        <div className='lendBookBtn'>
          <CustomButton isLendBook onClick={this.callLendBook}>
            Lend book
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default Book;