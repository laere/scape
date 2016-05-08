import React, { Component, PropTypes } from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.submitFunc}>
        <div>
          <input type="text" value={props.textValue} onChange={props.onchangeFunc}/>
        </div>
        <div>
          <button>Search</button>
          <button onClick={props.onclickFunc}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
