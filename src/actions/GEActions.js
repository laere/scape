import axios from 'axios';

export const GE_REQUEST = 'GE_REQUEST';
export const GE_SUCCESS = 'GE_SUCCESS';
export const GE_FAILURE = 'GE_FAILURE';

const request = () => {
  return {
    type: GE_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchGrandExchangeData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => dispatch(receive(GE_SUCCESS, res.data)))
      .catch(res => dispatch(receive(GE_FAILURE)))
  }
}
