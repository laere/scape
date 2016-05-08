import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStreamsData } from '../actions/StreamsActions';
import { STREAMS_URL } from '../endpoints/endpoints';
import Streams from '../components/Streams';
import Loading from '../components/Loading';

class StreamsContainer extends React.Component {
  static propTypes = {
    streamsData: PropTypes.object,
    fetchStreams: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchStreams, streams } = this.props;
    if (!streams.data) {
      fetchStreams(STREAMS_URL);
    }
  }

  render() {
    const { streams } = this.props;
    return streams.isFetching ?
      <Loading name="Loading data..."/> :
      <Streams streams={streams.data.streams}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStreams: (url) => dispatch(fetchStreamsData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
