import React, { Component, PropTypes } from 'react';

const Hiscores = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text"/>
        </div>
        <div>
          <button>Search</button>
          <button>Clear</button>
        </div>
      </form>
      <div>
        {/*Hiscores DATA TO GO HERE*/}
      </div>
    </div>
  );
}

export default Hiscores;
