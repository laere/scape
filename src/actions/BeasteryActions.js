import axios from 'axios';

export const BEASTERY_REQUEST = 'BEASTERY_REQUEST';
export const BEASTERY_SUCCESS = 'BEASTERY_SUCCESS';
export const BEASTERY_FAILURE = 'BEASTERY_FAILURE';
export const BEASTERY_INPUT = 'BEASTERY_INPUT';

export const setInput = (text) => {
  return {
    type: BEASTERY_INPUT,
    text
  }
}

const request = () => {
  return {
    type: BEASTERY_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetchBeasteryData = (text) => {
  return (dispatch) => {
    dispatch(request());
    console.log(text);
    return axios.get('/beastery/' + text)
      .then(res => dispatch(receive(BEASTERY_SUCCESS, res.data)))
      .catch(res => dispatch(receive(BEASTERY_FAILURE)))
  }
}
