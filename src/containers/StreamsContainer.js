import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStreamsData } from '../actions/StreamsActions';
import { STREAMS_URL } from '../endpoints/endpoints';
import Streams from '../components/Streams';

class StreamsContainer extends React.Component {
  static propTypes = {
    streamsData: PropTypes.object,
    fetchStreams: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchStreams, streamsData } = this.props;
    if (!streamsData.data) {
      fetchStreams(STREAMS_URL);
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
    fetchStreams: (url) => dispatch(fetchStreamsData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamsContainer);
