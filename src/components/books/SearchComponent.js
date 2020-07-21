import React from 'react';

const Search = (props) => {
  return(
    <form onSubmit={props.handleSearch} className="searchHolder">
      <input
        type="text" className="bookSearch"
        placeholder="Search for book" name="bookSearch"
        value={props.searchInput} onChange={props.handleInput} autoFocus></input>
      <button className="searchBtn" type="submit"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default Search;