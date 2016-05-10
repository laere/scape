import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';

const Beastery = ({text, beasts, onSubmit, onClick, onChange}) => {
  return (
    <div>
    <SearchBar onClick={onClick}
               onSubmit={onSubmit}
               onChange={onSubmit}/>
      <div>
        {beasts.map(beast => {
          return (
            <div key={beast.value}>
              {beast.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Beastery;
