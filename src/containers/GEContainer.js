import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';
import GE from '../components/GE';

class GEContainer extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();

  }

  render() {
    return (
      <GE />
    );
  }
}

export default GEContainer;
