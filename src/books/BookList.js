import React from 'react'
import Book from './Book.js'
import './books.css'

const BookList = props => {
  return (
    <div className="bookCards">
      {
        props.books.map((book, i) => {
          return <Book
                    coverArt={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title}
                    author={book.volumeInfo.authors} publishedDate={book.volumeInfo.publishedDate}
                    toLink={book.volumeInfo.infoLink} key={i}/>
        })
      }
    </div>
  )
}

export default BookList