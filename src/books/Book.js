import React from 'react';
import '../App.scss';
import CustomButton from '../components/customButton/CustomButton';
import './books.css';
import { removeBook } from '../actions/bookActions';

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
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary" data-toggle="modal">
        Click Here for More
        </button>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="popup" tabindex="-1" role="dialog" aria-labelledby="modalPopup" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalPopup">Go To..</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p><a href="/borrow" class="tooltip" title="Borrow Page">Borrow</a></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Go Back</button>
              </div>
            </div>
          </div>
        </div>
        <button className="md-button" type="submit" onClick={removeBook}>Delete Book</button>
        {/* <button className="addBtn" onClick={props.addToVivlio}>Add to MyVivlio</button> */}
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
