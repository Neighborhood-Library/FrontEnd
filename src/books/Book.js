import React from 'react'
import './books.css'
import '../App.css'

const Book = props => {
  return (
    <div className="bookCard">
      <img className="coverArt" alt="Cover Art" src={props.coverArt}></img>
      <h2 className="bookTitle">{props.title}</h2>
      <h4 className="author">{props.author}</h4>
      <p className="bookSummary">{props.publishedDate}</p>
      <a href={props.toLink}>Learn More</a>
      <button className="addBtn" onClick={props.addToVivlio}>Add to MyVivlio</button>
    </div>
  )
}

export default Book
