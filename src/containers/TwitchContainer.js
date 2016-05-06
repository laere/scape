import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/DataFetching';
import Twitch from '../components/Twitch';

class TwitchContainer extends React.Component {
  static propTypes = {
    twitchData: PropTypes.object,
    fetchStreams: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchStreams, twitchData } = this.props;
    if (!twitchData.data) {
      fetchStreams('https://api.twitch.tv/kraken/streams?game=runescape&limit=100');
    }
  }

  render() {
    const { twitchData } = this.props;
    return twitchData.isFetching ?
      <h1 style={{textAlign: 'center', fontSize: '6rem'}}>Loading data...</h1> :
      <Twitch streams={twitchData.data.streams}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    twitchData: state.twitchData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStreams: (url) => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitchContainer);
