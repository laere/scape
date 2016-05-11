import React, { Component, PropTypes } from 'react';

const GrandExchange = ({text, onSubmit, onChange}) => {
  return (
    <div>
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
      </div>
      <div>
        {/*BEAST DATA TO GO HERE*/}
      </div>
    </div>
  );
}

export default GrandExchange;
