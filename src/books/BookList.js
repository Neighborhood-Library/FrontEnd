import React from 'react'
import Book from './Book.js'
import './books.css'

const BookList = props => {
  console.log(props)
  const blankImg = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
  return (
    <div className="bookCards">
      {
        props.books.length === 0 ?
          <p>Search for a book</p>
        :
        props.books.map((book, i) => {
          return <Book
                    coverArt = {book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : blankImg }
                    title = {book.volumeInfo.title}
                    author={book.volumeInfo.authors} publishedDate={book.volumeInfo.publishedDate}
                    toLink={book.volumeInfo.infoLink} addToVivlio={props.addToVivlio} 
                    key={i}/>
        })
      }
    </div>
  )
}

export default BookList