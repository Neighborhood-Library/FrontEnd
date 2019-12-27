import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import CustomButton from '../../components/customButton/CustomButton';
import { getAvailBooks } from '../../actions/getAvailBooks';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    }
  }

  componentDidMount = async () => {
    await this.props.getAvailBooks(this.props.book.google_book_id);

    await Axios
      .get(`https://www.googleapis.com/books/v1/volumes/${this.props.book.google_book_id}`)
      .then(async res => {
        this.setState({ info: res.data })
      })
      .catch(err => console.log(err.body));
  }

  checkIfLendOrBorrow = () => {    
    if (this.props.delLendBook) {
      return this.props.delLendBook(this.props.book.id);
    } else {
      return this.props.delBorrowBook(this.props.book.id);
    }
  }

  render() {
    if (this.state.info === null) {
      return (
        <p>Loading book...</p>
      )
    } else {
      return (
        <div className='bookCard'>
          <button className="remove-book" onClick={this.checkIfLendOrBorrow}>x</button>
          {/* {
            this.props.lenders ?
              <button className="availability">6 available</button>
            : null
          } */}
          <img
            className='coverArt'
            alt='Cover Art'
            src={this.state.info.volumeInfo.imageLinks !== undefined ? this.state.info.volumeInfo.imageLinks.thumbnail : ''}
          />
          <h2 className='bookTitle'>{this.state.info.volumeInfo.title}</h2>
          <h4 className='author'>{this.state.info.volumeInfo.authors ? this.state.info.volumeInfo.authors[0] : 'N/A' }</h4>
          <p className='bookSummary'>{this.state.info.volumeInfo.publishedDate.split('-')[0]}</p>
          {
            this.props.lenders ?
              <div className='borrowBookBtn'>
                <CustomButton isLendBook className='lendBookBtn custom-button' onClick={this.callBorrowBook}>
                  {
                  this.props.availPending ?
                    <ClipLoader size={30} color={"#ffffff"} />
                  : 
                    `${this.props.availBooks.length} available`
                }
                </CustomButton>
              </div>
              :
              null
          }
          <CustomButton className='custom-button'>
            <a
              href={this.state.info !== null ? this.state.info.volumeInfo.previewLink : '#'} target="_blank" rel="noopener noreferrer">Learn More</a>
          </CustomButton>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  availPending: state.getAvailBooksRed.availPending,
  availBooks: state.getAvailBooksRed.books
});

export default connect(mapStateToProps, { getAvailBooks })(Book);