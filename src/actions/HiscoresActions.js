import axios from 'axios';

export const HISCORES_REQUEST = 'HISCORES_REQUEST';
export const HISCORES_SUCCESS = 'HISCORES_SUCCESS';
export const HISCORES_FAILURE = 'HISCORES_FAILURE';

const request = () => {
  return {
    type: HISCORES_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchHiscoresData = (url) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url)
      .then(res => dispatch(receive(HISCORES_SUCCESS, res.data)))
      .catch(res => dispatch(receive(HISCORES_FAILURE)))
  }
}
