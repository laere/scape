import React, { Component, PropTypes } from 'react';

const Hiscores = ({text, hiscores, onSubmit, onChange}) => {
  return (
    <div>
      <div className="searchbar">
        <form onSubmit={onSubmit}>
          <div>
            <input type="text" value={text} onChange={onChange}/>
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
      <div>
        {hiscores.map(x => x)}
      </div>
    </div>
  );
}

export default Hiscores;
