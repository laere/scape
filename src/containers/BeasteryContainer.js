import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setInput, clearInput, fetchBeasteryData } from '../actions/BeasteryActions';
import { BEASTERY_URL } from '../endpoints/endpoints';
import Beastery from '../components/Beastery';
import Loading from '../components/Loading';

class BeasteryContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    getInput: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    getBeasteryData: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { getBeasteryData, text } = this.props;
    getBeasteryData(text);
  }

  handleOnClick(e) {
    e.preventDefault();
    const { clearInput } = this.props;
    clearInput();
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
        onClick={this.handleOnClick}
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
    clearInput: () => dispatch(clearInput()),
    getBeasteryData: (url) => dispatch(fetchBeasteryData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeasteryContainer);
