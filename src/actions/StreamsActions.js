import axios from 'axios';

export const STREAMS_REQUEST = 'STREAMS_REQUEST';
export const STREAMS_SUCCESS = 'STREAMS_SUCCESS';
export const STREAMS_FAILURE = 'STREAMS_FAILURE';

const request = () => {
  return {
    type: STREAMS_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchStreamsData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => dispatch(receive(STREAMS_SUCCESS, res.data)))
      .catch(res => dispatch(receive(STREAMS_FAILURE)))
  }
}
