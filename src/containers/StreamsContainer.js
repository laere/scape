import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/DataFetching';
import Streams from '../components/Streams';

class StreamsContainer extends React.Component {
  static propTypes = {
    streamsData: PropTypes.object,
    fetchStreams: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchStreams, streamsData } = this.props;
    if (!streamsData.data) {
      fetchStreams('https://api.twitch.tv/kraken/streams?game=runescape&limit=100');
    }
  }

  render() {
    const { streamsData } = this.props;
    return streamsData.isFetching ?
      <h1 style={{textAlign: 'center', fontSize: '6rem'}}>Loading data...</h1> :
      <Streams streams={streamsData.data.streams}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    streamsData: state.streamsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStreams: (url) => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
