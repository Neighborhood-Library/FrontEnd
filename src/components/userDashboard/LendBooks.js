import React from 'react';
import Book from './Book';

const LendBooks = props => {
  console.log(props.books);
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

export default LendBooks;
