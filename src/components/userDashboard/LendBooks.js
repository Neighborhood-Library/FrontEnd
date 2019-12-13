import React from 'react';

const LendBooks = props => {
  console.log(props.books);
  return (
    <section>
      {/* {props.books.length === 0 ? (
        <p>No books found</p>
      ) : (
        props.books.map(book => {
          return <p>book</p>;
        })
      )} */}
    </section>
  );
};

export default LendBooks;
