import React from 'react';
import Book from './Book';

const BooksList = props => {
  return (
    <div className="dashboard-books">
      {
        props.books === undefined || props.books.length === 0 ?
          <p>No books found</p>
        :
          props.books.map(book => {
            return <Book
              key={book.id}
              book={book}
              {...props}
            />;
          })
      }
    </div>
  );
};

export default BooksList;
