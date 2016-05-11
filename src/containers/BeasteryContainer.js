import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setInput, fetchBeasteryData } from '../actions/BeasteryActions';
import Beastery from '../components/Beastery';

class BeasteryContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    getInput: PropTypes.func.isRequired,
    getBeasteryData: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { getBeasteryData, text } = this.props;
    getBeasteryData(text);
  }

  handleOnChange(e) {
    e.preventDefault();
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {
    const { text, beasts } = this.props;
    return (
      <Beastery
        text={text}
        beasts={beasts.data}
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.beastery.input,
    beasts: state.beastery.beast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (text) => dispatch(setInput(text)),
    getBeasteryData: (text) => dispatch(fetchBeasteryData(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeasteryContainer);
