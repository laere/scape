import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setInput, clearInput } from '../actions/BeasteryActions';
import { fetchData } from '../actions/DataFetching';
import Beastery from '../components/Beastery';

class BeasteryContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
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
    //getBeasteryData(url + text);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.props.clearInput();
  }

  handleOnChange(e) {
    e.preventDefault();
    this.props.getInput(text);
  }

  render() {
    return (
      <Beastery
        text={text}
        onSubmit={this.handleOnSubmit}
        onClick={this.handleOnSubmit}
        onChange={this.handleOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.beastery.beasteryInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (text) => dispatch(setInput(text)),
    clearInput: () => dispatch(clearInput()),
    getBeasteryData: (url) => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeasteryContainer);
