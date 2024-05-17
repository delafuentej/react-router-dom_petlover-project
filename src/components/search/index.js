import React, { useRef } from 'react';
// Import createSearchParams
// Import useNavigate
import { useNavigate, createSearchParams } from 'react-router-dom';
const Search = () => {

  // get navigate function
  const   navigate = useNavigate();
  console.log('navigate',navigate)
  const searchInputRef = useRef();
  console.log('searchInputRef', searchInputRef)

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }
    console.log('searchQuery',searchQuery)

    // use createSearchParams 
    const query = createSearchParams(searchQuery);
    console.log('query', query)
    // imperatively redirect with useNavigate() returned function
    navigate({
      pathname:'/search',
      search: `?${query}`
    })
  };
  console.log('onSearchHandler', onSearchHandler)
  console.log('navigate', navigate)

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
