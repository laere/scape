import React, { Component, PropTypes } from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <input type="text" onChange={props.onChange}/>
        </div>
        <div>
          <button>Search</button>
          <button onClick={props.onClick}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
