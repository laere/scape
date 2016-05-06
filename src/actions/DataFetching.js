import axios from 'axios';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const request = () => {
  return {
    type: REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => dispatch(receive(SUCCESS, res.data)))
      .catch(res => dispatch(receive(FAILURE)))
  }
}
