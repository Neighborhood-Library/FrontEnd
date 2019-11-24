import React from 'react'
import './books.css'

const Search = (props) => {
  return(
    <div className="middle">
      <form onSubmit={props.handleSearch} className="searchHolder">
        <input
          type="text" className="bookSearch"
          placeholder="Search for book" name="bookSearch"
          value={props.searchInput} onChange={props.handleInput}></input>
        <button className="searchBtn" type="submit"><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Search