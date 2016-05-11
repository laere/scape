import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';
import { setInput, fetchGrandExchangeData } from '../actions/GEActions';
import GrandExchange from '../components/GrandExchange';

class GrandExchangeContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    geData: PropTypes.array.isRequired,
    getInput: PropTypes.func.isRequired,
    getGrandExchangeData: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { getGrandExchangeData, text } = this.props;
    getGrandExchangeData(text);
  }

  handleOnChange(e) {
    e.preventDefault();
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {
    const { text, geData } = this.props;
    return (
      <GrandExchange
        text={text}
        geData={geData}
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.grandExchange.input,
    geData: state.grandExchange.items.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (text) => dispatch(setInput(text)),
    getGrandExchangeData: (text) => dispatch(fetchGrandExchangeData(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrandExchangeContainer);
