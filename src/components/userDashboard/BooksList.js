import React from 'react';
import Book from './Book';

const BooksList = props => {
  return (
    <section>
      {
        props.books.length === 0 ?
          <p>No books found</p>
        :
          props.books.map(book => {
            return <Book book={book} />;
          })
      }
    </section>
  );
};

export default BooksList;
