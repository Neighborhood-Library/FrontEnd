import React from 'react';
import { connect } from 'react-redux';
import { removeBook, toggleAvailability } from '../../actions/bookActions';
import Book from '../../books/Book';
import CustomButton from '../customButton/CustomButton';
import './BookItem.scss';

const toggleAvailabilityConfig = {
  available: {
    text: 'Available to borrow',
    iconName: '<i class="fa fa-check-circle"/>'
  },
  unavailable: {
    text: 'Currently borrowed',
    iconName: '<i class="fas fa-ban"/>'
  }
};

const selectBook = (book, banana) => {
  if (       ) {
    return book > 0 ? 'available' : 'unavailable'
  } else {
    return book > 0 ? 'unavailable' : 'available'
  }
};

const BookItem = ({book, }) => {
  const bookAvailability = selectBook(book);
  const { text, iconName } = toggleAvailabilityConfig[bookAvailability];

  return (
    <div className='collection-book'>
      { books.length === 0 ? (
        <span className='empty-message'>Your vivlio shelf is empty</span>
      ) : (
        books.map((book, i) => 
                  <Book 
                     coverArt = {book.volumeInfo.imageLinks !== undefined ?book.volumeInfo.imageLinks.thumbnail : blankImg }
                     title = {book.volumeInfo.title}
                     author={book.volumeInfo.authors}
                     publishedDate={book.volumeInfo.publishedDate}
                     toLink={book.volumeInfo.infoLink}
                     isbn={book.volumeInfo.industryIdentifiers[0].identifier}
                     id={book.id}
                     key={i}/>)

      ) 
      }
      <CustomButton
        className='availability-button'
        type='button'
        availability
        onClick={() => toggleAvailability(book)
        }
      >
        Make Book Available
      </CustomButton>
      <CustomButton
        className='remove-button'
        type='button'
        removeBook
        onClick={() => removeBook(book)}
      >
        Remove Book
      </CustomButton>
      
    </div>
  )
};

export default connect(null, actions)(BookItem);
