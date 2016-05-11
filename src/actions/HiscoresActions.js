import axios from 'axios';

export const HISCORES_REQUEST = 'HISCORES_REQUEST';
export const HISCORES_SUCCESS = 'HISCORES_SUCCESS';
export const HISCORES_FAILURE = 'HISCORES_FAILURE';
export const HISCORES_INPUT = 'HISCORES_INPUT';

export const setInput = (text) => {
  return {
    type: HISCORES_INPUT,
    text
  }
}

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

export const fetchHiscoresData = (text) => {
  return (dispatch) => {
    dispatch(request());
    console.log(text);
    return axios.get('/hiscores/' + text)
      .then(res => dispatch(receive(HISCORES_SUCCESS, res.data)))
      .catch(res => dispatch(receive(HISCORES_FAILURE)))
  }
}
