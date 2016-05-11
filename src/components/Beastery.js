import React, { Component, PropTypes } from 'react';
import Loading from './Loading';

const Beastery = ({text, beasts, onSubmit, onClick, onChange}) => {
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
        {beasts.map(x => <div key={x.value}>{x.label}</div>)}
      </div>
    </div>
  );
}

export default Beastery;
