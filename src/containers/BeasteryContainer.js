import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setInput, clearInput } from '../actions/BeasteryActions';
import { fetchData } from '../actions/DataFetching';
import Beastery from '../components/Beastery';

class BeasteryContainer extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    // this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  handleOnClick(e) {
    e.preventDefault();
  }

  handleOnChange(e) {
    e.preventDefault();

  }

  render() {
    console.log(this.props.text);
    return (
      <Beastery />
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
