import React, { Component, PropTypes } from 'react';

export default class Beastery extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
        <div>
          {/*BEAST DATA TO GO HERE*/}
        </div>
      </div>
    );
  }
}
