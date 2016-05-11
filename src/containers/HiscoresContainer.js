import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';
import { setInput, fetchHiscoresData } from '../actions/HiscoresActions';
import Hiscores from '../components/Hiscores';

class HiscoresContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    hiscores: PropTypes.array.isRequired,
    getInput: PropTypes.func.isRequired,
    getHiscoresData: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { getHiscoresData, text } = this.props;
    getHiscoresData(text);
  }

  handleOnChange(e) {
    e.preventDefault();
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {
    const { text, hiscores } = this.props;
    return (
      <Hiscores text={text}
                hiscores={hiscores}
                onSubmit={this.handleOnSubmit}
                onChange={this.handleOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.scores.input,
    hiscores: state.hiscores.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (text) => dispatch(setInput(text)),
    getHiscoresData: (text) => dispatch(fetchHiscoresData(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiscoresContainer);
