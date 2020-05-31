import React from 'react';
import Book from './Book';

const BooksList = props => {
  return (
    <section className="dashboard-books">
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
    </section>
  );
};

export default BooksList;
