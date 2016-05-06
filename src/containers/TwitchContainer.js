import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/DataFetching';
import RS_URL from '../endpoints/endpoints';
import Twitch from '../components/Twitch';

class TwitchContainer extends React.Component {
  static propTypes = {

  };

  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams('https://api.twitch.tv/kraken/streams?game=runescape');
  }

  render() {
    return (
      <Twitch />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.twitchData.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStreams: (url) => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitchContainer);
