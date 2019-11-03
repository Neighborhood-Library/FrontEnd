import React from 'react'
import './books.css'

let bookcover = `https://images-na.ssl-images-amazon.com/images/I/71%2Bm5hvolcL._SY606_.jpg`
const OwnedBooks = () => {
  return (
    <section className="bookDisplay">
      <div className="bookCard">
        <img className="coverArt" alt="Cover Art" src={bookcover}></img>
        <h2 className="bookTitle">The Outsiders</h2>
        <h4 className="author">S.E. Hinton</h4>
        <p className="bookSummary">A teen gang in rural Oklahoma, the Greasers are perpetually at odds with the Socials, a rival group. When Greasers Ponyboy (C. Thomas Howell) and Johnny (Ralph Macchio) get into a brawl that ends in the death of a Social member, the boys are forced to go into hiding.</p>
      </div>
    </section>
  )
}

export default OwnedBooks
