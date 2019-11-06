import React from 'react'
import './books.css'

const Book = props => {
  return (
    <div className="bookCards">
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129426l/231804.jpg"></img>
        <h2 className="bookTitle">The Outsiders</h2>
        <h4 className="author">S.E. Hinton</h4>
        <p className="bookSummary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente modi totam libero pariatur fugiat tempora porro repellat veritatis sequi error? Libero facere officiis, rem quis quae saepe eaque ratione. Harum.</p>
      </div>
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src="https://images-na.ssl-images-amazon.com/images/I/61wuP9E162L._SY606_.jpg"></img>
        <h2 className="bookTitle">Harry Potter and The Goblet Of Fire</h2>
        <h4 className="author">J.K. Rowling</h4>
        <p className="bookSummary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente modi totam libero pariatur fugiat tempora porro repellat veritatis sequi error? Libero facere officiis, rem quis quae saepe eaque ratione. Harum.</p>
      </div>
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src="https://images-na.ssl-images-amazon.com/images/I/51iZjfDPMJL._SX334_BO1,204,203,200_.jpg"></img>
        <h2 className="bookTitle">Vampire Kisses</h2>
        <h4 className="author">Ellen Schreiber</h4>
        <p className="bookSummary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente modi totam libero pariatur fugiat tempora porro repellat veritatis sequi error? Libero facere officiis, rem quis quae saepe eaque ratione. Harum.</p>
      </div>
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src="https://cdn11.bigcommerce.com/s-nfxi2m/images/stencil/1280x1280/products/617/1499/Holes-Book__78862.1533332768.jpg?c=2&imbypass=on"></img>
        <h2 className="bookTitle">Holes</h2>
        <h4 className="author">Louis Sachar</h4>
        <p className="bookSummary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente modi totam libero pariatur fugiat tempora porro repellat veritatis sequi error? Libero facere officiis, rem quis quae saepe eaque ratione. Harum.</p>
      </div>
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src="https://images-na.ssl-images-amazon.com/images/I/812FoY5HeoL.jpg"></img>
        <h2 className="bookTitle">captain underpants and the attack of the talking toilets</h2>
        <h4 className="author">Dav Pilkey</h4>
        <p className="bookSummary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente modi totam libero pariatur fugiat tempora porro repellat veritatis sequi error? Libero facere officiis, rem quis quae saepe eaque ratione. Harum.</p>
      </div>
    </div>
  )
}

export default Book

// <div className="bookCard">
//   <img className="coverArt" alt="Cover Art" src={props.coverArt}></img>
//   <h2 className="bookTitle">{props.title}</h2>
//   <h4 className="author">{props.author}</h4>
//   <p className="bookSummary">{props.summary}</p>
// </div>