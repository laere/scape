import React, { Component, PropTypes } from 'react';

const Beastery = ({text, onChange, onClick, onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" value={text} onChange={onChange}/>
        </div>
        <div>
          <button>Search</button>
          <button onClick={onClick}>Clear</button>
        </div>
      </form>
      <div>
        {/*BEAST DATA TO GO HERE*/}
      </div>
    </div>
  );
}

export default Beastery;
