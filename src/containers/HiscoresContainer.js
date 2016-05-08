import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';
import Hiscores from '../components/Hiscores';

class HiscoresContainer extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();

  }

  render() {
    return (
      <Hiscores/>
    );
  }
}

export default HiscoresContainer;
