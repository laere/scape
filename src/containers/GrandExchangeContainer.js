import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';
import GrandExchange from '../components/GrandExchange';

class GrandExchangeContainer extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();

  }

  render() {
    return (
      <GrandExchange />
    );
  }
}

export default GrandExchangeContainer;
