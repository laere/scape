import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setInput, fetchGrandExchangeData, fetchGrandExchangeGraphData } from '../actions/GEActions';
import GrandExchange from '../components/GrandExchange';

class GrandExchangeContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    geData: PropTypes.array.isRequired,
    graphData: PropTypes.array.isRequired,
    getInput: PropTypes.func.isRequired,
    getGrandExchangeData: PropTypes.func.isRequired,
    getGraphData: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleGraphData = this.handleGraphData.bind(this);
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

  handleGraphData(e) {
    e.preventDefault(e)
    const { getGraphData, text } = this.props;
    getGraphData(text);
  }

  render() {
    const { text, geData, graphData } = this.props;
    return (
      <GrandExchange
        text={text}
        geData={geData}
        graphData={graphData}
        onClick={this.handleGraphData}
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.grandExchange.input,
    geData: state.grandExchange.items.data,
    graphData: state.grandExchange.items.graphData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (text) => dispatch(setInput(text)),
    getGrandExchangeData: (text) => dispatch(fetchGrandExchangeData(text)),
    getGraphData: (text) => dispatch(fetchGrandExchangeGraphData(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrandExchangeContainer);
