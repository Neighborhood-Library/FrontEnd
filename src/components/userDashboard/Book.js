import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import CustomButton from '../../components/customButton/CustomButton';
import Modal from '../Modal';
import { getAvailBooks } from '../../actions/getAvailBooks';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      modal: false,
      available: false
    }
  }

  componentDidMount = async () => {
    if (this.props.lenders) {
      await this.props.getAvailBooks(this.props.book.google_book_id);
    }

    await Axios
      .get(`https://www.googleapis.com/books/v1/volumes/${this.props.book.google_book_id}`)
      .then(async res => {
        this.setState({ info: res.data });
      })
      .catch(err => console.log(err.body));
  }

  checkIfLendOrBorrow = async () => {    
    if (!this.props.lenders) {
      return this.props.deleteBookHandler('lend',this.props.book.id);
    } else {
      return this.props.deleteBookHandler('borrow', this.props.book.id);
    }
  }

  openModal = e => {
    e.preventDefault();

    this.setState({modal: true});
  }

  closeModal = e => {
    e.preventDefault();

    console.log('closing modal');

    this.setState({modal: false});
  }

  checkAvailable = async () => {
    console.log(this.state.info);

    await Axios
      .get(`${process.env.REACT_APP_REQ_URL}/api/lender-collection/${this.props.book.lender_id}`, {withCredentials: true})
      .then(res => {
        console.log(`entry found for ${this.props.book.lender_id}`);

        const books = res.data.filter(book => book.google_book_id === this.state.info.id);

        console.log(books[0].is_available);

        this.setState({available: `${books[0].is_available}`});
      })
      .catch(err => {
        console.log(`entry not found or incorrect for ${this.props.book.lender_id}`);
        this.setState({available: `false`});
      });
  }

  render() {
    if (this.state.info === null) {
      return (
        <div className="bookCard">
          <ClipLoader size={50} />
        </div>
      )
    } else {
      return (
        <div className='bookCard'>
          {
            this.state.modal ?
              <Modal
                availability
                closeModal={this.closeModal}
                availBooks={this.props.availBooks}
              />
            :
              null
          }
          <div className="remove-book" onClick={this.checkIfLendOrBorrow}>
            <p>x</p>
          </div>
          <img
            className='coverArt'
            alt='Cover Art'
            src={this.state.info.volumeInfo.imageLinks !== undefined ? this.state.info.volumeInfo.imageLinks.thumbnail : ''}
          />
          <h4 className='bookTitle'>{this.state.info.volumeInfo.title}</h4>
          <h4 className='author'>{this.state.info.volumeInfo.authors ? this.state.info.volumeInfo.authors[0] : 'N/A' }</h4>
          <p className='bookSummary'>{this.state.info.volumeInfo.publishedDate.split('-')[0]}</p>
          {
            // checks to show lenders
            this.props.lenders ?
              <CustomButton isLendBook className='lendBookBtn custom-button' onClick={this.openModal} >
                {
                  this.props.availPending ?
                    <ClipLoader size={30} color={"#ffffff"} />
                  : 
                    `${this.props.availBooks.length} available`
                }
              </CustomButton>
            :
              <CustomButton className={`availability custom-button ${this.state.available}`}>
                Toggle Availability
              </CustomButton>
          }
          <CustomButton learnMore={true}>
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